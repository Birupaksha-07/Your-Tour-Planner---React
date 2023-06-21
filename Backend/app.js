const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path : './config.env'});
require('./db/conn');

app.use(express.json());
// const User = require('./model/userSchema');


app.use(require('./router/auth'));

const PORT = 4200;



app.listen(PORT,()=>{
    console.log(`Server is running at port no ${PORT} `);
})
