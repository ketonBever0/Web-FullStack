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
            SELECT gepjarmu_tipus FROM arkategoriak
            ORDER BY gepjarmu_tipus
        `,
        [],
        (err, rows) => {
            if (err) res.status(400).send(err);
            res.json(rows);
        }
    )
}

const uploadFile = (req, res) => {
    db.query(
        `
            INSERT INTO files
            SET path=?
        `,
        [req.body.path],
        (err, rows) => {
            if (err) res.status(400).send(err);
            res.json(rows);
        }
    )
}



module.exports = {
    getFiles,
    uploadFile
}