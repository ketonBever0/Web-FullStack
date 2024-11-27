const fs = require("fs");
const { dirname } = require("path");
const appDir = dirname(require.main.filename);
const mysql = require("mysql");
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "file_upload",
});

const fetchFile = (req, res) => {
	db.query(
		`
            SELECT path
            FROM files
            WHERE path=?
        `,
		[req.params.path],
		(err, rows) => {
			if (err) res.status(400).send(err);
			res.sendFile(`${appDir}/uploads/${rows[0].path}`);
		}
	);
};

const getFiles = (req, res) => {
	db.query(
		`
            SELECT *
                FROM files

                `,
		[],
		(err, rows) => {
			if (err) res.status(400).send(err);
			res.json(rows);
		}
	);
};

const uploadFile = (req, res) => {
	// console.log(req.files.file);
	// console.log(req.files);  

	const filePaths = req.files.map((file) => file.path);

	// files.forEach((file) => {
	// 	if (queryStr != "") queryStr += ", ";
	// 	const fileName = Date.now() + "_" + req.files.file.name;
	// 	var filePath = appDir + "/uploads/";
	// 	file.mv(filePath + fileName);
	// 	queryStr += `("${fileName}")`;
	// });

	const rows = db.query(
		`
            INSERT INTO files (path)
            VALUES ?;
        `,
		[filePaths.map(path => [path])],
		(err) => {
			if (err) return res.status(400).send(err);
		}
	);
	console.log(rows);
	return res.status(200).json(rows);
};

const deleteFile = (req, res) => {
	const file = req.body.path;
	console.log(req.body);

	file &&
		fs.unlink(dir + file, (err) => {
			if (err) {
				return res.status(400).json({ message: "Hiba!" });
			} else {
				db.query(
					`
            DELETE FROM files
            WHERE path=?
            `,
					[file],
					(err, rows) => {
						if (err) return res.status(400).send(err);
						else
							return res.status(200).json({
								message: "Törölve!",
								affectedCount: rows.affectedCount,
							});
					}
				);
			}
		});

	// return res.status(400).json({ message: "Hiba!" });
};

module.exports = {
	fetchFile,
	getFiles,
	uploadFile,
	deleteFile,
};
