

let currentUser = {};
currentUser.name = '';

let mainPageStrip = function () {
    function showPhotoPost(photoPost){
        console.log(photoPost.id);


        let content = document.querySelector('.strip');

        let post = document.createElement('div');
        post.className='post';
        post.id = photoPost.id.toString();
        let authorPic = document.createElement('div');
        authorPic.className='author-pic';
        authorPic.innerHTML = '<img src="assets/pics/avatar-top-left.svg" width="35" height="35">';

        post.appendChild(authorPic);

        if(currentUser.name===photoPost.author) {
             let delIcon = document.createElement('img');
            delIcon.id = 'delete_'+ photoPost.id.toString();
            delIcon.align = 'right';
            delIcon.src = 'assets/pics/delete.png';
            delIcon.width = 35;
            delIcon.height = 35;
            delIcon.onclick = function () {
                eventsModule.deletePost(delIcon.id);
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
                eventsModule.editPost(editIcon.id);
            }
        }
        //
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
        iLikeIcon.onclick = function () {
            eventsModule.pressLike(iLikeIcon.id);
        };
        likeIcon.appendChild(iLikeIcon);
        likeInfo.appendChild(likeIcon);
        postBottom.appendChild(likeInfo);
        post.appendChild(postBottom);
        content.appendChild(post);
    }
    return{
        showPhotoPost: showPhotoPost
    }
}();

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
         eventsModule.addPost();
     };
     let TopLeftAvatar = document.querySelector('.top-left-avatar');
     TopLeftAvatar.onclick = function () {
         eventsModule.showMainPage(username);
         window.scrollTo(0,0);
     };
     currentUser.name = username;
     localStorage.setItem('currentUser', username);
 }
}

function getFormatDate(photoPost) {
    let date = photoPost.createdAt;
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

function showPhotoPosts(skip, top, filterConfig) {
    let strip = document.querySelector('.strip');
    while(strip.firstChild){
        strip.removeChild(strip.firstChild);
    }



    localStorageModule.loadArray();
    let array = getPhotoPosts(skip,top,filterConfig);

    for(let i = 0 ; i < array.length; i++)
        showPhotoPost(array[i], currentUser);
    if(array.length >= 10) {
        let showMoreButton = document.createElement('input');
        if (array.length !== photoPosts.length) {
            showMoreButton.type = 'button';
            showMoreButton.value = 'Show more...';
            showMoreButton.onclick = function () {
                showPhotoPosts(skip, top + 10, filterConfig);
            };
            strip.appendChild(showMoreButton);
        }
    }
}



function showPhotoPost(id) {
    mainPageStrip.showPhotoPost(id);
}

function removePhotoPost(id) {
    modulePhotoPosts.removePhotoPost(id);
    showPhotoPosts(0,10,filterConfigPrevious);
}

function getPhotoPost(id) {
    return modulePhotoPosts.getPhotoPost(id);
}

function editPhotoPost(id, photoPost) {
    modulePhotoPosts.editPhotoPost(id,photoPost);
    showPhotoPosts(0,10,filterConfigPrevious);
}

function addPhotoPost(photoPost){
    modulePhotoPosts.addPhotoPost(photoPost);
    showPhotoPosts(0,10,filterConfigPrevious);

}

function getPhotoPosts(skip,top,filterConfig){
    return modulePhotoPosts.getPhotoPosts(skip,top,filterConfig);
}

function findMaxID() {

}