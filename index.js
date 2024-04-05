let mongoose = require("mongoose");


let connection = mongoose.connect("mongodb://127.0.0.1:27017/mukku");
connection
.then((result)=>{
    console.log("Connected")
})
.catch((error)=>{
    console.log("Disconnect")
});



// let studentsSchema = mongoose.Schema({
//     name:String,
//     FatherName : String,
//     MotherName : String
// });


// let StudentModel = mongoose.model("Student", studentsSchema);

// let ram = new StudentModel({
//     name : "Ram",
//     FatherName: "Dashrath",
//     MotherName: "Kaushlya"
// });

// let sham = new StudentModel({
//     name : "sham",
//     FatherName: "ratabn",
//     MotherName: "msfjhfs"
// });

// ram.save();
// sham.save();



let fruitSchema = mongoose.Schema({
    fruit:String,
    color : String
})


let Fruit = mongoose.model("Fruit",fruitSchema);


// Fruit.insertMany([{fruit : "banana", color:"Yellow"},{fruit : "cherry" , color:"red"},{fruit:"cucumber", color:"green"}]).then((result)=>{
//     console.log("saved")
//     console.log(result)
// }).catch((error)=>{
//     console.log("dataunsaved")
// });

// let fruits1 = new Fruit({
//     fruit: "Mango",
//     color : "yellow"
// });


// let fruit2 = new Fruit({
//     fruit : "apple",
//     color : "red"
// })

// fruits1.save().then(
//     (result)=>{
//         console.log("data saved")
//     }
// ).catch((error)=>{
//     console.log("data unsaved")
// });
// fruit2.save();

