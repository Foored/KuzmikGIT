var eventsModule = function () {

    function logButtonEvent(logButton) {
        if(currentUser.name === '') {
            showLoginPage();

        }
        else {
            logButton.innerHTML = '<img src="assets/pics/log-in.png" width="45" height="45" >'
            currentUser.name = '';
            localStorage.setItem('currentUser', '');
            document.querySelector('.add-photo').innerHTML = '';
            document.querySelector('.top-left-avatar').innerHTML = '';
            showMainPage();
        }
    }


    function showMainPage(username) {
        if(username===undefined)
            username = localStorage.getItem('currentUser');

        let logButton =  document.querySelector('.log-out');
        logButton.onclick = function () {
           logButtonEvent(logButton);
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
            filterPosts();
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

        filterPosts();
    }

    function showErrorPage() {

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
    }

    function filterPosts() {

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
    }

    function showLoginPage() {
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
            authorization()
        };
    }

    function authorization(){
        let loginInput = document.querySelector('.login-input-form');
        let passwordInput = document.querySelector('.password-input-form');
        if(loginInput.value !=='' && passwordInput.value !=='')
            showMainPage(loginInput.value);
        else {
            document.querySelector('.log-message').style.color = 'red';

            document.querySelector('.log-message').innerText = 'Incorrect login or password. Try again.';

        }
    }

    function pressLike(id) {
        if(currentUser.name==='')
            return;
        let heart = document.getElementById(id);
        let post = modulePhotoPosts.getPhotoPost(id.replace('like_',''));

        console.log(post);
        if(heart.style.color === 'red') {
            heart.style.color = '#707070';
            post.likes.splice(post.likes.indexOf(currentUser.name), 1);
        }
        else{
            heart.style.color = 'red';
            post.likes.push(currentUser.name);
        }
        document.getElementById('likeAmount_'+id.replace('like_','')).innerHTML = '<h1>'+post.likes.length +'</h1>'
        localStorageModule.addArrayToLS();
    }

    function deletePost(id) {
        modulePhotoPosts.removePhotoPost(id.replace('delete_',''));
        document.getElementById(id.replace('delete_','')).remove();
        localStorageModule.addArrayToLS();
    }

    function editPost(id) {
        let photoPost = modulePhotoPosts.getPhotoPost(id.replace('edit_',''));
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
        doneButton.onclick = function () {
            let hashtagsArray = [];
            if(editPanelH.value!=='')
                 hashtagsArray = editPanelH.value.split(' ');
            if(modulePhotoPosts.editPhotoPost(photoPost.id, {hashtags: hashtagsArray, description: editPanelD.value})) {
                console.log(photoPost);
                console.log(modulePhotoPosts.getPhotoPost(photoPost.id));
                localStorageModule.addArrayToLS();
                showMainPage(currentUser.name);
            }
        };
        editionHashtags.appendChild(doneButton);

        strip.appendChild(post)
    }

    function addPost() {
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
        photoPlace.innerHTML = '<img src="https://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg">';
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
        doneButton.onclick = function () {
            let photoPost = {};
            photoPost.description = editPanelD.value;
            photoPost.author = currentUser.name;
            photoPost.photoLink = "https://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg";
            if(editPanelH.value!=='')
                photoPost.hashtags = editPanelH.value.split(' ');
            else
                photoPost.hashtags = [];
            photoPost.createdAt = new Date();
            photoPost.likes = [];
            //localStorageModule.loadArray();
            photoPost.id = (photoPosts.length + 1).toString();
            if(modulePhotoPosts.addPhotoPost(photoPost)) {
                localStorageModule.addArrayToLS();
                showMainPage();
            }
        };
        editionHashtags.appendChild(doneButton);

        strip.appendChild(post)
    }

    return {
        showMainPage: showMainPage,
        showErrorPage: showErrorPage,
        filterPosts: filterPosts,
        showLoginPage: showLoginPage,
        authorization: authorization,
        pressLike: pressLike,
        deletePost: deletePost,
        editPost: editPost,
        addPost: addPost
    }
}();

function showMainPage() {
    eventsModule.showMainPage()
}

function showErrorPage() {
    eventsModule.showErrorPage()
}

if(localStorage.getItem('photoPosts') === null)
    localStorageModule.addBackupToLS();
showMainPage();
