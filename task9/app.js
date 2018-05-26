const express = require('express');
const model = require('./public/Javascript/PhotoPosts.js');

const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const filePath = "server/data/posts.json";
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + '/public/assets/img');
    },
    filename: function(req, file, callback) {
        let filename = file.fieldname + '-' + Date.now() + '-' + file.originalname;
        callback(null, filename);
    }
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(express.static('./public'));

app.post('/uploadImage', upload.single('file'), (req, res) => {
    let url = req.file.filename;
    if(url !== null){
        url = '/assets/img/' + url;
        res.send(JSON.stringify(url));
    }
    else{
        res.status(404).end();
    }
});


app.get('/getPost/:id', (req, res)=> {

    let array = JSON.parse(fs.readFileSync(filePath));
    let post = model.modulePhotoPosts.getPhotoPost(array, req.params.id);
    if(post && post.isDeleted===false){
        fs.writeFile(filePath, JSON.stringify(array), function (error) {
            if (error) {
                throw error;
            }
        });
        console.log(post);
        res.send(post);
    }
    else{
        console.log(post);
        res.status(404).end();
    }
});

app.post('/addPost', (req,res)=>{
    let post = req.body;
    console.log(post);
    post.createdAt = new Date();
    let array = JSON.parse(fs.readFileSync(filePath));
    let maxID = 1;
    l = array.length;
    for(let i = 0 ; i < l; i++ ){
        if(Number(array[i].id)>maxID)
            maxID = Number(array[i].id);
    }
    post.id = (maxID+1).toString();
    if(model.modulePhotoPosts.addPhotoPost(array, post)) {
        fs.writeFile(filePath, JSON.stringify(array), function (error) {
            if (error) {
                throw error;
            }
        });
        res.status(200).end();
    }
    else
        res.status(404).end();
});

app.put('/editPost/:id', (req,res)=>{
    let post = req.body;
    console.log("edit server"+post);
    let array = JSON.parse(fs.readFileSync(filePath));
    if(model.modulePhotoPosts.editPhotoPost(req.params.id, post, array)){
        fs.writeFile(filePath, JSON.stringify(array), function (error) {
            if (error) {
                throw error;
            }
        });
        res.status(200).end();
        }
    else
        res.status(404).end();

});

app.post('/getPosts/:skip&:top', (req, res) =>{
    console.log('getPosts function entered');
    let posts = JSON.parse(fs.readFileSync(filePath));
    for (let i = 0; i < posts.length; i++)
        posts[i].createdAt = new Date(posts[i].createdAt);
    console.log(parseInt(req.params.skip), parseInt(req.params.skip) + parseInt(req.params.top));
    console.log(posts);
    //res.send(posts);
    if(req.params.skip === '0' && req.params.top ==='0') {
        console.log("Array returned");
        res.send(posts);
    }
    let filteredPosts = model.modulePhotoPosts.getPhotoPosts( posts, req.body, parseInt(req.params.skip), parseInt(req.params.skip) + parseInt(req.params.top));
    console.log(filteredPosts);
    if(filteredPosts !== null){
        res.send(filteredPosts);
    }
    else{
        res.status(404).end();
    }
});

app.delete('/deletePost/:id', (req, res) => {
    console.log('oh hi mark');
    let array = JSON.parse(fs.readFileSync(filePath));
    console.log(array.length);
    console.log(req.params.id);
    if (model.modulePhotoPosts.removePhotoPost(array, req.params.id)) {
        console.log("deleted!");
        fs.writeFile(filePath, JSON.stringify(array), function (error) {
            if (error) {
                throw error;
            }
        });
        res.status(200).end()
    }
    else {
        console.log(array.length*2);
        res.status(404).end();
    }
});

app.post('/likePost/:user&:id', (req, res) =>{
    let array = JSON.parse(fs.readFileSync(filePath));
    //console.log(req.params.id);
    if( model.modulePhotoPosts.saveLike(array,req.params.id,req.params.user) ) {
        console.log('great!');
        let post = model.modulePhotoPosts.getPhotoPost(array, req.params.id);
        fs.writeFile(filePath, JSON.stringify(array), function (error) {
            if (error) {
                throw error;
            }
        });
        res.send(post);
    }
    else{
        res.status(404).end();
    }
});

app.get('/getAll/', (req, res)=> {

    let array = JSON.parse(fs.readFileSync(filePath));
    if(array!==undefined){
        res.send(array);
    }
    else{
        res.status(404).end();
    }
});

app.listen(5000, () => console.log('Server is listening on 5000'));