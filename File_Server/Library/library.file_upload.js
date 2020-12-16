import express from 'express';
import formidable from 'formidable';
import path from 'path';

const router = express.Router();

export const fileUpload = router.use(function(req, res, next){
    console.log(req.url + "@" + Date.now());
    next();
});

const fileDir = path.dirname('./')

router.get('/test', function(req, res){
    res.send({
        message: "Test Successful"
    })
    return console.log("test successul");
});

//Get Files

router.get('/serve/:filename', function(req,res){
    res.sendFile(`uploads/${req.params.filename}`, {root: fileDir});
});

//Upload Files

router.post('/upload', function(req, res){
    
    const form = formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', (name, file) => {
        file.path = `./Uploads/${file.name}`
    })

    form.on('file', function(name, file){
        console.log('Uploaded ' + file.name);
    });

    res.send("file uploaded!")
});