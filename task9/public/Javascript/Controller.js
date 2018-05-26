    (function(exp) {

    exp.filterPosts = function filterPosts() {

        let hashtags = document.querySelector('.input-tags');
        let hashtagsStr = hashtags.value;

        let dateSince = document.querySelector('.text-date1');
        let dateSinceStr = dateSince.value;
        let dateFor = document.querySelector('.text-date2');
        let dateForStr = dateFor.value;

        let author = document.querySelector('.input-author');
        let authorStr = author.value;

        let filterConfig = {};
        if(hashtagsStr!=='')
            filterConfig.hashtags = hashtagsStr.split(', ');
        if(authorStr!=='')
            filterConfig.author = authorStr;
        if(dateSinceStr!=='') {
            filterConfig.dateSince = new Date(dateSinceStr);
            console.log(filterConfig.dateSince)
        }
        if(dateForStr!==''){
            filterConfig.dateFor = new Date(dateForStr);
            console.log(filterConfig.dateFor)

        }

        showPhotoPosts(0,10,filterConfig);
    };

    exp.pressLike = async function pressLike(id) {

        if(currentUser.name==='')
            return;

        let user = currentUser.name;
        let shortId = id.substr(5);
        let likes = {};
        let post;
        likes.amount = 0;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/likePost/" + user + "&" + shortId, true);
        xhr.onreadystatechange = function () {
            if(xhr.status !== 200 || xhr.readyState !== 4) {
                console.log(xhr.status + ": " + xhr.statusText);
            }
            else {
                console.log('Server answered');
               // console.log(xhr.responseText);
                mainPageStrip.likeView(id,JSON.parse(xhr.responseText));
            }
        };

       // console.log(eventsModule.loadAll())
       // mainPageStrip.likeView(id,10);
        xhr.send();

    };

    exp.deletePost = function deletePost(id) {
            let xhr = new XMLHttpRequest();

            xhr.open("DELETE","/deletePost/" + id.replace('delete_',''), true );
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4 ||xhr.status !== 200) {
                    console.log(xhr.status + ': ' + xhr.statusText);
                } else {
                    console.log(xhr.responseText);
                }
            };
            mainPageStrip.deletePostView(id.replace('delete_',''));
            xhr.send();
    };

    exp.loadImage = function loadImage(file){
        let formData = new FormData();
        formData.append('file', file[0]);
        console.log("ds");
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/uploadImage');
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                let url = JSON.parse(xhr.responseText);
                console.log(url);
                localStorage.setItem("imageUrl",url);
            }
        };
        xhr.send(formData);
    };

    exp.editPost = function editPost(id,photoPost,editPanelH, editPanelD) {
        console.log("editPost function entered");
        console.log(id);
        console.log(photoPost);
        console.log(editPanelH);
        console.log(editPanelD);

        let hashtagsArray = [];
        if(editPanelH!=='')
            hashtagsArray = editPanelH.split(' ');
        let postChanges = {};

        postChanges.hashtags = hashtagsArray;
        postChanges.description = editPanelD;
        console.log(postChanges);
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("PUT", "/editPost/" + id, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if(xhr.readyState !== 4){
                    return;
                }
                if(xhr.status !== 200) {
                    reject(xhr.status + ": " + xhr.statusText);
                }
                else {
                    mainPageStrip.showMainPage(currentUser.name);
                    resolve(true);
                }
            };
            xhr.send(JSON.stringify(postChanges));
        });

        if(modulePhotoPosts.editPhotoPost(photoPost.id, {hashtags: hashtagsArray, description: editPanelD.value})) {
            console.log(photoPost);
            console.log(modulePhotoPosts.getPhotoPost(photoPost.id));
            mainPageStrip.showMainPage(currentUser.name);
        }

    };

    exp.addPost = function(photoPost){

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/addPost", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if(xhr.status !== 200 || xhr.readyState !== 4) {
                console.log(xhr.status + ": " + xhr.statusText);
            }
            else {
               // localStorage.setItem("maxID", JSON.stringify(Number(photoPost.id) + 1));
                return true
            }
        };
        console.log(photoPost);
        xhr.send(JSON.stringify(photoPost));

    };

    exp.load = function load(skip, top, filters){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/getPosts/" + skip + "&" + top, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if(xhr.readyState !== 4){
                    return;
                }
                if(xhr.status !== 200) {
                    reject(xhr.status + ": " + xhr.statusText);
                }
                else {
                    resolve(xhr.responseText);
                }
            };
            xhr.send(JSON.stringify(filters));
        })
    };

    })(this.eventsModule = {});


if(localStorage.getItem('currentUser')==='null' || localStorage.getItem('currentUser')===null) {
    localStorage.setItem('currentUser', '');
}
mainPageStrip.showMainPage();
