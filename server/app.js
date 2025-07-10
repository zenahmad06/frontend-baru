const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const dashboardRoute = require('./routes/dashboard');

//connect mongoDb

mongoose.connect('mongodb://localhost:27017/groupDB')
  .then(() => console.log('MongoDB connected!'))
// server sama client beda port
app.use(cors());
app.use(express.json())
app.use('/',dashboardRoute);
//middleware error
app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).json({status:'invalid error'})
    next();
})
module.exports = app;
