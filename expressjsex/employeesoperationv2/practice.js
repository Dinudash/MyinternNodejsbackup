var express=require('express')
var app=express();

app.get("/",function(req,res){
    res.send('welcome.....')
})
app.get("/getallemployees",function(req,res){
    res.send(employeesList)
})

app.listen(5000,function(err){
    if(err){
        console.log("Got error while starting app");
        console.log(err);
        return;
    }
  if(!err){
    console.log("App is started successfully n running on port:5000..");
  }

})
var employeesList=[{
    empno:101,
        ename:"anil",
        job:"Bussines Analyst",
        sal:65000,
        email:"anil@mail.com",
        deptno:10

    },
    {
        empno:102,
        ename:"Dinesh",
        job:"Engineer",
        sal:55000,
        email:"dinesh@mail.com",
        deptno:20
} ,
 {
       empno:103,        
       ename:"adam",
       job:" Clerk",
       sal:85000,
       email:" adam@mail.com",
       deptno:30
 }
]