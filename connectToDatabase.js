let mongoose = require("mongoose");



module.exports = mongoose.connect("mongodb://127.0.0.1:27017/muskan").then(()=>{
    console.log("connected succesfully");
}).catch(()=>{
    console.log("not connected");
});

