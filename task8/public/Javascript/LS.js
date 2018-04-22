let localStorageModule = function () {

    function addArrayToLS() {
        let serializedArray = JSON.stringify(photoPosts);
        localStorage.setItem('photoPosts', serializedArray);
    }

    function addBackupToLS() {
        let serializedArray = JSON.stringify(photoPostsBackUp);
        localStorage.setItem('photoPosts', serializedArray);
    }

    function loadArray() {
        photoPosts = JSON.parse(localStorage.getItem('photoPosts'));
        for (let i = 0; i < photoPosts.length; i++)
            photoPosts[i].createdAt = new Date(photoPosts[i].createdAt);
    }

    return{
        addArrayToLS: addArrayToLS,
        loadArray: loadArray,
        addBackupToLS: addBackupToLS
    }
}();