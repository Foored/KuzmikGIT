
(function(exp) {


    exp.getPhotoPosts = function getPhotoPosts(buffPhotoPostsAll, filterConfig, skip, top) {
        if(skip===undefined)
            skip = 0;
        if(top===undefined)
            top = 10;

        let buffPhotoPosts = [];
        for(var i = 0 ; i < buffPhotoPostsAll.length; i++)
            if(buffPhotoPostsAll[i].isDeleted === false)
                buffPhotoPosts.push(buffPhotoPostsAll[i]);
        console.log('!!!!!!!!!');
        console.log(buffPhotoPosts.length);
        console.log(filterConfig);
        if(filterConfig===undefined)
            filterConfig = {};
        if(filterConfig!==undefined) {
            if ("author" in filterConfig)
                filterByAuthor(buffPhotoPosts, filterConfig.author);
            if ("dateSince" in filterConfig) {
                console.log(buffPhotoPosts.length);

                console.log("date filtering");
                filterByDateSince(buffPhotoPosts, new Date(filterConfig.dateSince));
                console.log(buffPhotoPosts.length);

            }
            if ("dateFor" in filterConfig)
                filterByDateFor(buffPhotoPosts, new Date (filterConfig.dateFor));
            if("hashtags" in filterConfig)
                filterByHashtags(buffPhotoPosts, filterConfig.hashtags);
        }
        if(skip > buffPhotoPosts.length)
            return null;

        if(top > buffPhotoPosts.length)
            top = buffPhotoPosts.length;

        console.log(buffPhotoPosts.length);
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
        console.log("filterSince entered");
        for(let i = 0 ; i < array.length; i++)
            if(!(array[i].createdAt >= dateSince)) {
                array.splice(i, 1);
                i--;
            }
    }

    function filterByDateFor(array, dateFor) {
        for(let i = 0 ; i < array.length; i++)
            if(!(array[i].createdAt <= dateFor)) {
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
        for(var i = 0 ; i < array.length;i++)
            if(array[i].id===id)
                return array[i];
        //return array.find(x => x.id === id);
    };

    getPhotoPost = function getPhotoPost(array, id){
        //console.log(array.find(x => x.id === id));
        for(var i = 0 ; i < array.length;i++)
            if(array[i].id===id)
                return array[i];
       // return array.find(x => x.id === id);
    };

    validatePhotoPost = function validatePhotoPost(photoPost) {
        console.log(photoPost);
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
        for(let i = 0 ; i < array.length; i++) {
            if (array[i].id === id) {
                console.log(i);
                array[i].isDeleted = true;
                return true;
            }
        }
        return false;
    };

    exp.saveLike = function saveLike(array, id, user){
        console.log('saveLike function entered');
        console.log(array.length);

        let post = getPhotoPost(array, id);

        if ((post.likes.find(x => x === user)) === undefined)
            post.likes.push(user);
        else
            post.likes.splice(post.likes.indexOf(user), 1);
        return true;
    };


})(this.modulePhotoPosts = {});