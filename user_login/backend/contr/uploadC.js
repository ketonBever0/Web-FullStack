const asyncHandler = require('express-async-handler');
const fs = require('fs');
const { dirname } = require('path');
const mongoose = require('mongoose');
const appDir = dirname(require.main.filename);
const Image = require('../models/Image');



const fileUpload = (asyncHandler(async (req, res) => {
    // console.log(appDir);
    if (req.files) {

        var path = appDir + "/files/";

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }

        // console.log(req.user.username + " feltöltött");


        for (prop in req.files) {
            var userPath = path + req.user.username + '/';

            if (!fs.existsSync(userPath)) {
                fs.mkdirSync(userPath, { recursive: true }, err => err && console.log(err));
            }
            // console.log(userPath);
            fs.writeFile(userPath + req.files[prop].name, req.files[prop].data, err => { err && console.log(err) });
            try {
                if (!fs.existsSync(userPath + req.files[prop].name)) {
                    await Image.create({
                        userid: req.user._id,
                        imageName: req.files[prop].name
                    })
                }
                else throw new Error("Nem lehetett fájlrendszerbe írni!");
            } catch (err) {
                console.log(err);
                throw new Error(`Már van ${req.files[prop].name} nevű fájl!`)
            }
        }

    }
    // res.send("<h2>Feltöltés</h2>")
    res.json({ message: "Feltöltés kész!" });
})
);


const getFiles = asyncHandler(async (req, res) => {
    const user = req.user;
    const imageUserId = await Image.find({ userid: user._id }) //.filter(x => x.userid == user._id)

    res.json(imageUserId);

})


const deleteFile = asyncHandler(async (req, res) => {

    const { imgId } = req.body;
    console.log(req.user.username);

    console.log(imgId);

    const image = await Image.findById(imgId);

    console.log(image)

    if (!image) throw new Error("A kép nem törölhető!");
    else {


        const path = appDir + `/files/${req.user.username}/${image.imageName}`
        fs.unlink(path, err => {
            if (err) res.status(400).send(err);
            else {
                Image.findOneAndDelete({ _id: imgId }, (err, doc) => {
                    if (err) res.status(400).send(err);
                    else res.json({ message: "Törölve!" });
                })
            }
        })

    }








    // res.send("Hiba!");


})





module.exports = {
    fileUpload,
    getFiles,
    deleteFile
}