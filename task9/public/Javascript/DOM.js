

let currentUser = {};
currentUser.name = '';
let maxID;
(function(exp) {



    exp.showPhotoPost = async function showPhotoPost(photoPost){
        console.log(photoPost);


        let content = document.querySelector('.strip');

        let post = document.createElement('div');
        post.className='post';
        post.id = photoPost.id.toString();
        let authorPic = document.createElement('div');
        authorPic.className='author-pic';
        authorPic.innerHTML = '<img src="assets/pics/avatar-top-left.svg" width="35" height="35">';
        console.log(1);

        post.appendChild(authorPic);

        if(currentUser.name===photoPost.author) {
             let delIcon = document.createElement('img');
            delIcon.id = 'delete_'+ photoPost.id.toString();
            delIcon.align = 'right';
            delIcon.src = 'assets/pics/delete.png';
            delIcon.width = 35;
            delIcon.height = 35;
            delIcon.onclick = async function () {

                await eventsModule.deletePost(delIcon.id);
            };
            post.appendChild(delIcon);

            let editIcon = document.createElement('img');
            editIcon.id = 'edit_'+ photoPost.id.toString();
            editIcon.align = 'right';
            editIcon.src = 'assets/pics/pencil.png';
            editIcon.width = 35;
            editIcon.height = 35;
            post.appendChild(editIcon);
            editIcon.onclick = function () {
                mainPageStrip.editPostView(editIcon.id);
            }
        }
        //
        console.log(2);

        let postName = document.createElement('div');
        postName.className='post-name';
        postName.id = 'name_' + photoPost.id.toString();
        postName.innerHTML='<h1>'+photoPost.author+'</h1>';



        let postTime = document.createElement('div');
        postTime.className = 'post-time';
        postTime.id = 'time_'+photoPost.id.toString();

        postTime.innerHTML='<h1>'+getFormatDate(photoPost)+'</h1>';


        post.appendChild(postName);
        post.appendChild(postTime);

        let photoPlace = document.createElement('div');
        photoPlace.className = 'photo-place';
        photoPlace.id = 'link_' + photoPost.id.toString();
        photoPlace.align = 'center';
        photoPlace.innerHTML = '<img src='+photoPost.photoLink+'>';

        post.appendChild(photoPlace);

        let postDescription = document.createElement('div');
        postDescription.className = 'post-description';
        postDescription.id = 'description_' + photoPost.id.toString();
        postDescription.innerHTML = '<h1>'+photoPost.description+'</h1>';

        post.appendChild(postDescription);

        let postBottom = document.createElement('div');
        postBottom.className = 'post-bottom';

        let postHash = document.createElement('div');
        postHash.className = 'post-hash';
        postHash.id = 'hashtags_' + photoPost.id.toString();
        postHash.innerHTML = '<h1>'+photoPost.hashtags.join(' ')+'</h1>';

        postBottom.appendChild(postHash);

        let likeInfo = document.createElement('div');
        likeInfo.className = 'like-info';

        let likeAmount = document.createElement('div');
        likeAmount.className = 'like-amount';
        likeAmount.id = 'likeAmount_'+ photoPost.id.toString();
        likeAmount.innerHTML = '<h1>'+photoPost.likes.length+'</h1>';

        likeInfo.appendChild(likeAmount);

        let likeIcon = document.createElement('div');
        likeIcon.className = 'like-icon';



        let iLikeIcon = document.createElement('i');
        iLikeIcon.className = 'fa fa-heart';
        iLikeIcon.width = '30px';
        iLikeIcon.height = '30px';
        iLikeIcon.id ='like_' + photoPost.id.toString();
        for(let i = 0 ; i < photoPost.likes.length; i++)
            if(photoPost.likes[i]===currentUser.name){
                iLikeIcon.style.color = 'red';
            }
        iLikeIcon.onclick = async function () {
            await eventsModule.pressLike(iLikeIcon.id);
        };
        likeIcon.appendChild(iLikeIcon);
        likeInfo.appendChild(likeIcon);
        postBottom.appendChild(likeInfo);
        post.appendChild(postBottom);
        content.appendChild(post);
    };

    exp.likeView = function likeView(id,post){
        console.log('----'+id);

        let heart = document.getElementById(id);
        if(heart.style.color === 'red') {
            heart.style.color = '#707070';
        }
        else{
            heart.style.color = 'red';
        }
        document.getElementById('likeAmount_'+id.replace('like_','')).innerHTML = '<h1>'+post.likes.length +'</h1>';

    };

    exp.deletePostView = function deletePostView(id){
        document.getElementById(id.replace('delete_','')).remove();
    };

    exp.editPostView = async function editPostView(id){
        //console.log(await eventsModule.load());
        let photoPost = modulePhotoPosts.getPhotoPost(JSON.parse(await eventsModule.load('0','0',{})),id.replace('edit_',''));
        console.log(JSON.parse(await eventsModule.load()));
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let post = document.createElement('div');
        post.className='post';

        let strip = document.querySelector('.strip');
        while (strip.firstChild) {
            strip.removeChild(strip.firstChild)
        }

        let authorPic = document.createElement('div');
        authorPic.className = 'author-pic';
        authorPic.innerHTML+='<img src="assets/pics/avatar-top-left.svg" width="35" height="35">';



        let postName = document.createElement('div');
        postName.className='post-name';
        postName.innerHTML='<h1>'+photoPost.author+'</h1>';

        let postTime = document.createElement('div');
        postTime.className = 'post-time';
        postTime.innerHTML='<h1>'+getFormatDate(photoPost)+'</h1>';
        post.appendChild(authorPic);
        post.appendChild(postName);
        post.appendChild(postTime);

        let photoPlace = document.createElement('div');
        photoPlace.className = 'photo-place';
        photoPlace.id = 'link_' + photoPost.id.toString();
        photoPlace.align = 'center';
        photoPlace.innerHTML = '<img src='+photoPost.photoLink+'>';
        post.appendChild(photoPlace);

        let editDescription = document.createElement('div');
        let editPanelD = document.createElement('textarea');
        editPanelD.className = 'edit-panel';
        editPanelD.type = 'text';
        editPanelD.value = photoPost.description;
        editDescription.appendChild(editPanelD);
        post.appendChild(editDescription);

        let editionHashtags = document.createElement('div');
        editionHashtags.className = "edition";
        let editPanelH = document.createElement('textarea');
        editPanelH.className = 'edit-panel';
        editPanelH.type = 'text';
        editPanelH.value = photoPost.hashtags.join(' ');

        editionHashtags.appendChild(editPanelH);
        post.appendChild(editionHashtags);

        let doneButton = document.createElement('input');
        doneButton.className='done-button';
        doneButton.type='button';
        doneButton.value = 'Done';
        doneButton.onclick = async function () {
            console.log("DoneButtonOnCLick function entered");
            console.log(id);
            console.log(photoPost);
            console.log(editPanelH.value);
            console.log(editPanelD.value);
            await eventsModule.editPost(photoPost.id.replace('edit_',''), photoPost, editPanelH.value, editPanelD.value);
        };


        editionHashtags.appendChild(doneButton);

        strip.appendChild(post)
    };

    exp.showMainPage = function showMainPage(username) {
        if(username===undefined)
            username = localStorage.getItem('currentUser');

        let logButton =  document.querySelector('.log-out');
        logButton.onclick = function () {
           mainPageStrip.logButton(logButton);
        };

        let content = document.querySelector('.content');
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
        let profile = document.createElement('div');
        profile.className = 'profile';

        let strip = document.createElement('div');
        strip.className = 'strip border-type';

        let search = document.createElement('div');
        search.className = 'search';

        let searchBlock = document.createElement('div');
        searchBlock.className = 'search-block border-type';

        let searchHead = document.createElement('div');
        searchHead.className = 'search-head';
        searchHead.innerHTML = '<h1>Search <i class="fa fa-filter"></i></h1>';

        let searchBody = document.createElement('div');
        searchBody.className = 'search-body';
        searchBody.innerHTML = '    <h3>Hash-tags</h3>\n';

        let inputTags = document.createElement('input');
        inputTags.type = 'text';
        inputTags.className = 'input-tags';
        inputTags.name = 'hash_tags';
        inputTags.placeholder = 'Hash-tags...';

        let inputDate = document.createElement('div');
        inputDate.className = 'input-date';
        inputDate.innerHTML += '<h3>Date (yyyy-mm-dd)</h3>\n';


        let textDate1 = document.createElement('input');
        textDate1.className = 'text-date1';
        textDate1.type = 'text';
        textDate1.name = 'Date1';
        textDate1.placeholder = 'Since...';

        let textDate2 = document.createElement('input');
        textDate2.className = 'text-date2';
        textDate2.type = 'text';
        textDate2.name = 'Date2';
        textDate2.placeholder = 'For...';

        inputDate.appendChild(textDate1);
        inputDate.appendChild(textDate2);
        inputDate.innerHTML += '<i class="fa fa-calendar"></i>';

        let inputAuthor = document.createElement('input');
        inputAuthor.className = 'input-author';
        inputAuthor.type = 'text';
        inputAuthor.name = 'Author';
        inputAuthor.placeholder = 'Username...';

        let buttonFilter = document.createElement('input');
        buttonFilter.className = 'filter';
        buttonFilter.type = 'button';
        buttonFilter.name = 'filter_button';
        buttonFilter.value = 'Show posts';
        buttonFilter.onclick = function () {
            eventsModule.filterPosts();
            localStorage.setItem('sinceDate', document.querySelector('.text-date1').value);
            localStorage.setItem('forDate', document.querySelector('.text-date2').value);
            localStorage.setItem('author', document.querySelector('.input-author').value);
            localStorage.setItem('hashtags', document.querySelector('.input-tags').value);

        };

        content.appendChild(profile);
        content.appendChild(strip);
        content.appendChild(search);
        search.appendChild(searchBlock);
        searchBlock.appendChild(searchHead);
        searchBlock.appendChild(searchBody);
        searchBody.appendChild(inputTags);
        searchBody.appendChild(inputDate);
        searchBody.innerHTML += '<h3>Author</h3>\n';
        searchBody.appendChild(inputAuthor);
        searchBody.appendChild(buttonFilter);
        if(username!==undefined)
            login(username);
        document.querySelector('.text-date1').value = localStorage.getItem('sinceDate' );
        document.querySelector('.text-date2').value = localStorage.getItem('forDate' );
        document.querySelector('.input-author').value = localStorage.getItem('author' );
        document.querySelector('.input-tags').value = localStorage.getItem('hashtags' );

        eventsModule.filterPosts();
    };

    exp.addPostView = function addPostView() {
        let post = document.createElement('div');
        post.className='post';

        let strip = document.querySelector('.strip');
        while (strip.firstChild) {
            strip.removeChild(strip.firstChild)
        }

        let authorPic = document.createElement('div');
        authorPic.className = 'author-pic';
        authorPic.innerHTML+='<img src="assets/pics/avatar-top-left.svg" width="35" height="35">';



        let postName = document.createElement('div');
        postName.className='post-name';
        postName.innerHTML='<h1>'+currentUser.name+'</h1>';

        let postTime = document.createElement('div');
        postTime.className = 'post-time';
        //d = new Date();
        //postTime.innerHTML='<h1>'+getFormatDate(d)+'</h1>';
        post.appendChild(authorPic);
        post.appendChild(postName);
        post.appendChild(postTime);

        let photoPlace = document.createElement('div');
        photoPlace.className = 'photo-place';
        photoPlace.align = 'center';
        photoPlace.innerHTML = '<input type="file" id="fileElem" accept="image/*" onchange="eventsModule.loadImage(this.files)">';
        post.appendChild(photoPlace);

        let editDescription = document.createElement('div');
        let editPanelD = document.createElement('textarea');
        editPanelD.className = 'edit-panel';
        editPanelD.type = 'text';
        editDescription.appendChild(editPanelD);
        post.appendChild(editDescription);

        let editionHashtags = document.createElement('div');
        editionHashtags.className = "edition";
        let editPanelH = document.createElement('textarea');
        editPanelH.className = 'edit-panel';
        editPanelH.type = 'text';

        editionHashtags.appendChild(editPanelH);
        post.appendChild(editionHashtags);

        let doneButton = document.createElement('input');
        doneButton.className='done-button';
        doneButton.type='button';
        doneButton.value = 'Done';
        doneButton.onclick = async function () {
            let photoPost = {};
            photoPost.description = editPanelD.value;
            photoPost.author = currentUser.name;
            photoPost.photoLink = localStorage.getItem("imageUrl");
            if(editPanelH.value!=='')
                photoPost.hashtags = editPanelH.value.split(' ');
            else
                photoPost.hashtags = [];
            photoPost.createdAt = new Date();
            photoPost.likes = [];

            await eventsModule.addPost(photoPost);
            mainPageStrip.showMainPage();
        };
        editionHashtags.appendChild(doneButton);

        strip.appendChild(post)
    };

    exp.showLoginPage = function showLoginPage() {
        document.querySelector('.top-left-avatar').innerHTML='';
        document.querySelector('.add-photo').innerHTML='';

        let content = document.querySelector('.content');
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
        let loginWindow = document.createElement('div');
        loginWindow.className = "login-window border-type";
        loginWindow.innerHTML +='<h1 class="log-message" align="center">Sign in</h1>';


        let loginInput = document.createElement('div');
        loginInput.className = "login-input";
        let loginInputText = document.createElement('input');
        loginInputText.type="text";
        loginInputText.className = "login-input-form";
        loginInputText.placeholder="Login";
        loginInputText.value = "Kuzmik.A";

        loginInput.appendChild(loginInputText);
        loginWindow.appendChild(loginInput);

        let passwordInput = document.createElement('div');
        passwordInput.className = "password-input";
        let passwordInputText = document.createElement('input');
        passwordInputText.type="password";
        passwordInputText.className = "password-input-form";
        passwordInputText.placeholder="Password";
        passwordInputText.value = "Hard_Password"
        passwordInput.appendChild(passwordInputText);
        loginWindow.appendChild(passwordInput);

        let button = document.createElement('div');
        button.className = "log-in-button";
        let buttonInput = document.createElement('input');
        buttonInput.type="button";
        buttonInput.value="Log in";

        //место для события кнопки авторизации
        button.appendChild(buttonInput);
        loginWindow.appendChild(button);
        content.appendChild(loginWindow);

        buttonInput.onclick = function () {
            mainPageStrip.authorization()
        };
    };

    exp.logButton = function logButtonEvent(logButton) {
        if(currentUser.name === '') {
            mainPageStrip.showLoginPage();
        }
        else {
            logButton.innerHTML = '<img src="assets/pics/log-in.png" width="45" height="45" >'
            currentUser.name = '';
            localStorage.setItem('currentUser', '');
            document.querySelector('.add-photo').innerHTML = '';
            document.querySelector('.top-left-avatar').innerHTML = '';
            mainPageStrip.showMainPage();
        }
    };

    exp.showErrorPage = function showErrorPage() {

        let content = document.querySelector('.content');
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }

        let errorContent = document.createElement('div');
        errorContent.className = 'error-content';

        let errorText = document.createElement('h1');
        errorText.innerText = 'Oops, something went wrong!';

        let returnButton = document.createElement('button');
        returnButton.textContent = 'Return to homepage';
        returnButton.onclick = function () {
            showMainPage()
        }

        errorContent.appendChild(errorText);
        errorContent.appendChild(returnButton);
        content.appendChild(errorContent)
    };

    exp.authorization = function authorization(){
        let loginInput = document.querySelector('.login-input-form');
        let passwordInput = document.querySelector('.password-input-form');
        if(loginInput.value !=='' && passwordInput.value !=='')
            mainPageStrip.showMainPage(loginInput.value);
        else {
            document.querySelector('.log-message').style.color = 'red';

            document.querySelector('.log-message').innerText = 'Incorrect login or password. Try again.';

        }
    };

})(this.mainPageStrip = {});
function login(username){
 if(username!=='')
 {
     document.getElementsByClassName("top-left-avatar")[0].innerHTML =
         "<img src=\"assets/pics/avatar-top-left.svg\" width=\"44\" height=\"44\">";
     document.getElementsByClassName("add-photo")[0].innerHTML=
         "<img src=\"assets/pics/photo-plus.png\" width=\"50\" height=\"45\" align=\"center\" >";
     document.getElementsByClassName("log-out")[0].innerHTML=
         "<img src=\"assets/pics/log-out.png\" width=\"45\" height=\"45\" >";
     document.getElementsByClassName("profile")[0].innerHTML=
         "<div class=\"avatar-place\">\n" +
         "     <div class=\"avatar\"><img src=\"assets/pics/avatar-top-left.svg\" width=\"150\" height=\"150\"></div>\n" +
         "     <h1 align=\"center\">"+username+"</h1>\n" +
         " </div>";
     let addPhoto = document.querySelector('.add-photo');
     addPhoto.onclick = function () {
         mainPageStrip.addPostView();
     };
     let TopLeftAvatar = document.querySelector('.top-left-avatar');
     TopLeftAvatar.onclick = function () {
         mainPageStrip.showMainPage(username);
         window.scrollTo(0,0);
     };
     currentUser.name = username;
     localStorage.setItem('currentUser', username);
 }
}

function getFormatDate(photoPost) {

    let date = new Date(photoPost.createdAt);
    let day = date.getDate();
    if (day < 10)
        day = "0" + day;

    let month = date.getMonth() + 1;
    if (month < 10)
        month = "0" + month;

    let year = date.getFullYear();

    let hours = date.getHours();
    if (hours < 10)
        hours = "0" + hours;

    let minutes = date.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;


    return day + "." + month + "." + year + "  " + hours + ":" + minutes;
}

let filterConfigPrevious = {};



async function showPhotoPosts(skip, top, filterConfig) {
    try {
        let strip = document.querySelector('.strip');
        while(strip.firstChild){
            strip.removeChild(strip.firstChild);
        }
        console.log(filterConfig);

        let array = JSON.parse(await eventsModule.load(skip, top, filterConfig));
        console.log(2);
        console.log(array);
        console.log(3);

        for(let i = 0 ; i < array.length; i++)
            mainPageStrip.showPhotoPost(array[i], currentUser);
        let showMoreButton = document.createElement('input');
        if (array.length === 10 ) {
            showMoreButton.type = 'button';
            showMoreButton.value = 'Show more...';
            showMoreButton.onclick = function () {
                showPhotoPosts(skip, top + 10, filterConfig);
            };
            strip.appendChild(showMoreButton);
        }
    }
    catch {
        alert("error");
    }
}



function getPhotoPost(id) {
    return modulePhotoPosts.getPhotoPost(id);
}
