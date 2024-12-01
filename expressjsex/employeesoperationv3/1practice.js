var express =require("express");

var app=express();

app.use(express.json());

app.get("/",function(req,res){
    console.log(req);
    res.send('welcome to employee operation  pg.....');
})

app.use(require('./routes/emp_routes'))
app.listen(5000,function(err){
    if(err){
        console.log("got error while starting app");
        console.log(err);
        return;
    }
    if(!err){
        console.log("app is started successfull and running on port:5000..");
    }
})