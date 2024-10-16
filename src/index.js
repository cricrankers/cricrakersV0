require("dotenv").config({path:'./.env'});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;
const Router  = require('./routes/routes.index');
const path = require('path');
const exp = require("constants");

//routes
app.use("/",Router);

//setup ejs
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,'views/pages'));

//serving static files
app.use(express.static(path.resolve(__dirname,'../public')))


app.listen(PORT,()=>{console.log(`Server started at port ${PORT}`)});