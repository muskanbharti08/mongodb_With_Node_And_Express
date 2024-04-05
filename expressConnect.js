let express = require("express");

let app = express();

let port = 3000;

let fn = app.listen(port,()=>{
    console.log("listen");
})

module.exports ={fn,app};