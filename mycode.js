const { default: mongoose } = require("mongoose");
let ctd = require("./connectToDatabase");


// let dishSchema = mongoose.Schema({
//     dish:String,
//     taste:String
// })

// let DishModel =mongoose.model("Dish",dishSchema);


// // DishModel.insertMany([{
// //     dish:"paneer",
// //     taste:"good"
// // },
// // {
// //     dish:"allopratha",
// //     taste:"very good,osm"
// // }


// // ])




// DishModel.find(

// ).then((data)=>{
//     console.log(data)
// })



        let detailSchema = mongoose.Schema({
            name:String,
            age:Number,
            city:String
        });


        let DetailsModel = mongoose.model("Detail",detailSchema);

        // DetailsModel.insertMany([
        //     {
        //         name:"muskan",
        //         age:22,
        //         city:"muzaffarpur"
        //     },
        //         {
        //             name:"mikku",
        //             age:22,
        //             city:"motihari"
        //         },
        //         {
        //             name:"aaaa",
        //             age:21,
        //             city:"patna"
        //         }
        //         ,
        //         {
        //             name:"rrrr",
        //             age:29,
        //             city:"jkfhufh"
        //         }])
        // .then((data)=>{
        //     console.log(data);
        //     console.log("savecl")
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });



        // DetailsModel.findOne({
        //     city:{$in:["muzaffarpur","motihari"]}
        // }).then((data)=>{
        //     console.log(data)
        // })




        // DetailsModel.findById("65e959fefcc75ad3998a272b").then((data)=>{
        //     console.log(data)
        // });



        // DetailsModel.updateOne({name:"muskan"},{$set:{age:24},$set:{name:"MyMuskan"}})
        // .then((data)=>{
        //         console.log(data);
        // })


        // DetailsModel.updateMany({city:"muzaffarpur"},{$set:{name:"rohan"}}).then((data)=>{
        //     console.log(data)
        // })




        // DetailsModel.findByIdAndUpdate("65e959fefcc75ad3998a272b",{age:70}).then((data)=>{
        //     console.log(data)
        // })



        //  delete

        // DetailsModel.deleteOne({age:24}).then((dta)=>{
        //     console.log(dta)
        // });

        DetailsModel.findByIdAndDelete("65e959fefcc75ad3998a272b").then((dta)=>{
            console.log(dta)
        })