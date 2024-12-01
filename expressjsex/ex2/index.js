//step 1
//import lib
var express=require('express')

//step2
//create app
var app =express();

//step4
//developing services
app.get("/",function(req,res){
    res.send('welcome to home pg');
})
app.get('/users',function(req,res){
  res.send('Hello users');

})
app.get('/employees',function(req,res){
    res.send('Hello employees');
  
  })
  app.get('/contactus',function(req,res){
    res.send('Hello contact us');
  
  })
  app.get('/services',function(req,res){
    res.send('Hello services');
  
  })


//step3
//register the app with pport
app.listen(5000,function(err){
    if(err){
        console.log("got error while registering the port");
    }
    if(!err){
        console.log("app is started successfully and listening on port 5000..");
    }
})