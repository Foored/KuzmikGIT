const express = require('express');
const model = require('./public/Javascript/PhotoPosts.js');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const filePath = "server/data/posts.json";

app.use(bodyParser.json());
app.use(express.static('./public'));

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
    post.createdAt = new Date();
    let array = JSON.parse(fs.readFileSync(filePath));
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

app.delete('/deletePost/:id', (req, res) => {
    let array = JSON.parse(fs.readFileSync(filePath));
    if (model.modulePhotoPosts.removePhotoPost(array, req.params.id)) {
        fs.writeFile(filePath, JSON.stringify(array), function (error) {
            if (error) {
                throw error;
            }
        });
        res.status(200).end()
    } else {
        res.status(404).end();
    }
});

app.listen(5000, () => console.log('Server is listening on 5000'));