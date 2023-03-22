
const express=require('express');
const cors = require("cors");
const connectDB= require('./db/connectdb.js');
const router=require('./routes/web');
const port=process.env.port || 4000;
const app=express();
// parse application/json
app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const url=`mongodb+srv://bilal:151214bscs@cluster0.ouusdwa.mongodb.net/?retryWrites=true&w=majority`;
// const url="mongodb://localhost:27017/olymics"
connectDB(url);
app.use(router);
app.listen(port,()=>{
    console.log("App start successully !");
})

