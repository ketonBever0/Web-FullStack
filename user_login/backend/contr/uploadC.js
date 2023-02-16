const asyncHandler = require('express-async-handler');
const fs = require('fs');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);


const fileUpload = (asyncHandler(async (req, res) => {
    console.log(appDir);
    if (req.files) {

        var path = appDir + "/files/";

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }

        console.log(req.user.username + " feltöltött");


        for (prop in req.files) {
            var userPath = path + req.user.username + '/';

            if (!fs.existsSync(userPath)) {
                fs.mkdirSync(userPath, { recursive: true }, err => err && console.log(err));
            }
            // console.log(userPath);
            fs.writeFile(userPath + req.files[prop].name, req.files[prop].data, err => { err && console.log(err) });
        }

    }
    res.send("<h2>Feltöltés</h2>")
})
);



module.exports = {
    fileUpload
}