const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./db/db');
const UserRoute =  require('../Backend/Routes/UserRoute');

const app =  express();
dotenv.config();

app.use(express.json());
connectdb();

app.use('/api/user' ,UserRoute);

app.listen(process.env.PORT, () => {
    console.log(`Running on PORT 5000 `);
})