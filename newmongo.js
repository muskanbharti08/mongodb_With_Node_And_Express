let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/muskan")
.then((result)=>{
    console.log("data conected");
})
.catch(
    (error)=>{
        console.log("data not connected");
    }
)



// Schema of  cat collection
let catSchema = mongoose.Schema(
    {
        name:String,
        color: String
    }
);


// Model 
let Cat = mongoose.model("Cat",catSchema);

let animal1 = new Cat(
    {
        name:"cat1",
        color:"black"
    }
);

Cat.insertMany([
    {name:"cat2",color:"white"},{name:"cat3",color:"white"},{name:"cat4",color:"white and black"}
]).then((result)=>{
    console.log("saved")
})
.catch((error)=>{
        console.log("unsaved")
})

animal1.save()
.then(()=>{

})
.catch(()=>{
    
});
