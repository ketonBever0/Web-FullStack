const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(fileUpload());

app.use("/api", require("./routes/fileRoutes"));

app.listen(8000, () => console.log("Running!"));
