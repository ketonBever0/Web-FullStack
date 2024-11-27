const express = require("express");
const path = require("path");
const multer = require("multer");
const fileRouter = express.Router();
const c = require("../controllers/fileController");

const appDir = path.dirname(require.main.filename);
const dir = appDir + "/uploads";
const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, { recursive: true });
			}
			cb(null, dir);
		},
		filename: (req, file, cb) => {
			cb(null, `${dir}/${Date.now()}_${file.originalname}`);
		},
	}),
});

fileRouter.get("/files/:path", c.fetchFile);
fileRouter.get("/files", c.getFiles);
fileRouter.post("/files", upload.array("files"), c.uploadFile);
fileRouter.delete("/files/delete", c.deleteFile);

module.exports = fileRouter;
