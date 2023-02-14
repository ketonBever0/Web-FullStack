const mysql = require('mysql');
const db = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "file_upload"
});



const getFiles = (req, res) => {
    db.query(
        `
            SELECT path
            FROM files
            
        `,
        [],
        (err, rows) => {
            if (err) res.status(400).send(err);
            res.json(rows);
        }
    )
}


const uploadFile = (req, res) => {
    console.log(req.files.file);
    // console.log(req.files);

    const file = req.files.file
    const fileName = Date.now() + "_" + req.files.file.name

    let filePath = __dirname + "\\..\\uploads\\" + fileName
    console.log(filePath);
    file.mv(filePath, (err) => {
        if (err) console.log(err)
        else {
            db.query(
                `
                    INSERT INTO files
                    SET path=?
                `,
                [filePath],
                (err, rows) => {
                    if (err) return res.status(400).send(err);
                    else return res.status(200).json(rows);
                }
            )
        }

    })

}



module.exports = {
    getFiles,
    uploadFile
}