(function (exp) {
    exp.showPhotoPost = function showPhotoPost(photoPost){
        document.getElementsByClassName("strip border-type")[0].innerHTML+=
            "<div class=\"post\">"
        +"    <div class=\"author-pic\"><img src=\"assets/pics/avatar-top-left.svg\" width=\"35\" height=\"35\"></div>\n"
        +"    <img align=\"right\" src=\"assets/pics/delete.png\" width=\"35\" height=\"35\">\n"
        +"    <img align=\"right\" src=\"assets/pics/pencil.png\" width=\"35\" height=\"35\">\n"
        +"    <div class=\"post-name\"><h1>"+photoPost.author+"</h1></div>\n"
        +"    <div class=\"post-time\"><h1>"+getFormatDate(photoPost)+"</h1></div>\n"
        +"    <div class=\"photo-place\" align=\"center\"><img src=\" "+photoPost.photoLink+"\"></div>\n"
        +"    <div class=\"post-description\">\n"
        +"        <h1>"+photoPost.description+"</h1>\n"
        +"    </div>\n"
        +"    <div class=\"post-bottom\">\n"
        +"        <div class=\"post-hash\"><h1>"+photoPost.hashtags.join(' ')+"</h1></div>\n"
        +"        <div class=\"like-info\">\n"
        +"            <div class=\"like-amount\"><h1>"+photoPost.likes.length+"</h1></div>\n"
        +"            <div class=\"like-icon\"><i class=\"fa fa-heart\" height = \"30\" width=\"30\"></i></div>\n"
        +"        </div>\n"
        +"    </div>\n"
        +"</div>\n"

    }
})(this.mainPage = {});
function login(username){
 if(username!==undefined)
 {
     document.getElementsByClassName("top-left-avatar")[0].innerHTML +=
         "<img src=\"assets/pics/avatar-top-left.svg\" width=\"44\" height=\"44\">"
     document.getElementsByClassName("add-photo")[0].innerHTML+=
         "<img src=\"assets/pics/photo-plus.png\" width=\"50\" height=\"45\" align=\"center\" >"
     document.getElementsByClassName("log-out")[0].innerHTML=
         "<img src=\"assets/pics/log-out.png\" width=\"45\" height=\"45\" >"
     document.getElementsByClassName("profile")[0].innerHTML+=
         "<div class=\"avatar-place\">\n" +
         "     <div class=\"avatar\"><img src=\"assets/pics/avatar-top-left.svg\" width=\"150\" height=\"150\"></div>\n" +
         "     <h1 align=\"center\">"+username+"</h1>\n" +
         " </div>"
 }
}
function getFormatDate(photoPost) {
    var date = photoPost.createdAt;

    var day = date.getDate();
    if (day < 10)
        day = "0" + day;

    var month = date.getMonth() + 1;
    if (month < 10)
        month = "0" + month;

    var year = date.getFullYear();

    var hours = date.getHours();
    if (hours < 10)
        hours = "0" + hours;

    var minutes = date.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;

    return day + "." + month + "." + year + "  " + hours + ":" + minutes;
}
var filterConfigPrevious = {};
function showPhotoPosts(skip, top, filterConfig) {
    document.getElementsByClassName("strip border-type")[0].innerHTML=""
    filterConfigPrevious = filterConfig
    array = getPhotoPosts(skip,top,filterConfig)
    for(var i = 0 ; i < array.length; i++)
        showPhotoPost(array[i])
}

function showPhotoPost(id) {
    mainPage.showPhotoPost(id);
}

function removePhotoPost(id) {
    modulePhotoPosts.removePhotoPost(id)
    showPhotoPosts(0,10,filterConfigPrevious)
}

function getPhotoPost(id) {
    return modulePhotoPosts.getPhotoPost(id)
}

function editPhotoPost(id, photoPost) {
    modulePhotoPosts.editPhotoPost(id,photoPost)
    showPhotoPosts(0,10,filterConfigPrevious)
}

function addPhotoPost(photoPost){
    modulePhotoPosts.addPhotoPost(photoPost)
    showPhotoPosts(0,10,filterConfigPrevious)

}

function getPhotoPosts(skip,top,filterConfig){
    return modulePhotoPosts.getPhotoPosts(skip,top,filterConfig)
}
