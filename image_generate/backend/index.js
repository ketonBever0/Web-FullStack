const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(process.env.PORT || 8000, () => console.log("Running!"));

app.use('/api', require('./routes/imageGenerateR'));


app.get('/', (req, res) => {
    res.send("<h2>Image Generate API</h2>")
});



