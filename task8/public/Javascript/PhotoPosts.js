
(function(exp) {


    exp.getPhotoPosts = function getPhotoPosts(skip, top, filterConfig) {
        if(skip===undefined)
            skip = 0;
        if(top===undefined)
            top = 10;
        if(filterConfig===undefined)
            filterConfig = {};
        let buffPhotoPosts = [];
        buffPhotoPosts = photoPosts.slice(0,photoPosts.length);
        if(filterConfig!==undefined) {
            if ("author" in filterConfig)
                filterByAuthor(buffPhotoPosts, filterConfig.author);
            if ("dateSince" in filterConfig)
                filterByDateSince(buffPhotoPosts, filterConfig.dateSince);
            if ("dateFor" in filterConfig)
                filterByDateFor(buffPhotoPosts, filterConfig.dateFor);
            if("hashtags" in filterConfig)
                filterByHashtags(buffPhotoPosts, filterConfig.hashtags);
        }
        if(skip > buffPhotoPosts.length)
            return null;
        if(top > buffPhotoPosts.length)
            top = buffPhotoPosts.length;
        sortByDate(buffPhotoPosts);
        return buffPhotoPosts.slice(skip,top);
    };

    function filterByAuthor(array, value) {
        for(let i = 0 ; i < array.length; i++)
            if(array[i].author!==value) {
                array.splice(i, 1);
                i--;
            }
    }

    function filterByHashtags(array, value){
        for(let i = 0; i < value.length; i++) {
            for(let j = 0; j < array.length; j++)
                if(array[j].hashtags.indexOf(value[i])===-1)
                {
                    array.splice(j,1);
                    j--;
                }
        }
    }

    function filterByDateSince(array, dateSince) {
        for(let i = 0 ; i < array.length; i++)
            if(!(array[i].createdAt > dateSince)) {
                array.splice(i, 1);
                i--;
            }
    }

    function filterByDateFor(array, dateFor) {
        for(let i = 0 ; i < array.length; i++)
            if(!(array[i].createdAt < dateFor)) {
                array.splice(i, 1);
                i--;
            }
    }

    function sortByDate(array) {
        array.sort(function (a,b){
            return b.createdAt - a.createdAt;
        } )
    }

    exp.getPhotoPost = function getPhotoPost(array, id){
        return array.find(x => x.id === id);
    };

    getPhotoPost = function getPhotoPost(array, id){
        return array.find(x => x.id === id);
    };

    validatePhotoPost = function validatePhotoPost(photoPost) {
        if(!"id" in photoPost || photoPost.id < 1)
            return false;

        if(!"description" in photoPost || photoPost.description.length > 200)
            return false;

        if(!"createdAt" in photoPost)
            return false;
        if(!"author" in photoPost || photoPost.author.length === 0)
            return false;
        if(!"photoLink" in photoPost || photoPost.photoLink.length === 0)
            return false;

        if(!"hashtags" in photoPost || !validateHashtags(photoPost.hashtags))
            return false;
        if(!"likes" in photoPost)
            return false;

        return true;
    };

    function validateHashtags(array) {
        for(let i = 0 ; i < array.length; i++)
        {
            if(array[i].charAt(0)!=='#')
                return false;
            for(let j = 1 ; j < array[i].length; j++)
                var ch = array[i].charAt(j)
            if(ch === ' ' || ch === '.' || ch === ',')
                return false;
        }
        return true;
    }

    exp.addPhotoPost = function addPhotoPost(photoPosts, photoPost){
        if(validatePhotoPost(photoPost) /*&& getPhotoPost(photoPost.id) === null*/) {
            photoPost.isDeleted = false;
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    };

    exp.editPhotoPost = function editPhotoPost(id, photoPost,array) {
        if (getPhotoPost(array, id) === null)
            return false;
        let buffer = getPhotoPost(array, id);
        let description_backup = buffer.description;
        let photoLink_backup = buffer.photoLink;
        let hashtags_backup = buffer.hashtags;
        if ("description" in photoPost){
            buffer.description = photoPost.description;
        }
        if("photoLink" in photoPost) {
            buffer.photoLink = photoPost.photoLink;
        }
        if("hashtags" in photoPost)
            buffer.hashtags = photoPost.hashtags.slice(0,photoPost.hashtags.length);
        if(!validatePhotoPost(buffer)){
            buffer.description = description_backup;
            buffer.photoLink = photoLink_backup;
            buffer.hashtags = hashtags_backup;
            return false;
        }
        return true;
    };

    exp.removePhotoPost = function removePhotoPost(array,id) {
        for(let i = 0 ; i < array.length; i++)
            if(array[i].id === id) {
                array[i].isDeleted = true;
                return true;
            }
        return false;
    }


})(this.modulePhotoPosts = {});