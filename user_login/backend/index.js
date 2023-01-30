const express = require('express');
const cors = require('cors');
require('dotenv').config();
const asyncHandler = require('express-async-handler');
const { connect } = require('./db');


const bcrypt = require('bcryptjs');

const User = require('./models/User');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/user', require('./routes/userR'));

const { errorHandler } = require('./middlewares/error_middleware');
app.use(errorHandler);

connect();



app.listen(process.env.PORT, () => console.log("Running!"));

app.get('/', (req, res) => res.send("<h2>Login API</h2>"));


