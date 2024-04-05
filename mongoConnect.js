let express = require("express");
let mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/mukku").then(
    (res)=>{console.log("connected with dataabase")}
).catch(
    (err)=>{console.log("not connected")}
);



let girlSchema = mongoose.Schema({
    name:String,
   nature : String
})


let Girl = mongoose.model("Girl",girlSchema);


let app = express();

let port = 3000;

app.listen(port,()=>{
    console.log("listen");
})

app.get("/:gname/:gnature",(req,res)=>{

    let {gname,gnature} = req.params;

let girl1 = new Girl({name:gname,nature:gnature});
girl1.save().then(
    (res)=>{console.log(res)}
).catch((err)=>{console.log(err)});   


})