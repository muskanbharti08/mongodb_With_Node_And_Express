let mongoConnect = require('./mongoConnect1');
let expr = require('./expressConnect');

expr.app.get("/:a/:b",(req,res)=>{
    let {a,b} = req.params;

    
let obj1 = new mongoConnect.Boys({
    name:a,
    age:b
});
obj1.save().then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
});
    res.send(`hellow world the value of a is ${a} and the value of b is ${b}`);
})