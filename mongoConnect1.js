let mongoose = require("mongoose");


let x =  mongoose.connect("mongodb://127.0.0.1:27017/mukku").then(
    (res)=>{console.log("connected with dataabase")}
).catch(
    (err)=>{console.log("not connected")}
);

let boysSchema = mongoose.Schema({
    name:String,
    age:Number
});

let Boys = mongoose.model("boys",boysSchema);
module.exports =  {x,Boys};


