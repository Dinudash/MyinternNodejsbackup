var express=require('express')
var app=express();

app.use(express.json())
app.get("/",function(req,res){
    console.log(req);
    res.send('welcome to employee operation  pg.....');
})
app.get("/getallemployees",function(req,res){
    console.log("from getallemployees services");
    res.send(employeesList);
})
app.get("/employees/:empno",function(req,res){
    console.log("this from  getemployeebyid services");
    const{ body,params,query}=req;
    console.log("body:",body);
    console.log("params:",params);
    console.log("query:",query);
    let emps=employeesList.filter(emp=>emp.empno==params.empno)
    res.send(emps[0]);
})

app.post("/employees",function(req,res){
    console.log("from postemployee services ");
  //console.log(req);
   const{ body,params,query}=req;
   console.log("body:",body);
   console.log("params:",params);
   console.log("query:",query);
   let empNosList=employeesList.map(emp=>emp.empno);
   let maxNo=0;
   if(empNosList.length=== 0)
   {
     maxNo=100;
    }
    else
       maxNo=Math.max(...empNosList)
   body.empno=maxNo + 1;

   employeesList=[...employeesList,body]
    console.log("New record is successfully saved");
   //res.send("New record is successfully saved.....")
    res.send(body);
})

app.put("/employees/:empno",function(req,res){
    console.log("this from  updateemployeebyid services");
    const{ body,params,query}=req;
    console.log("body:",body);
    console.log("params:",params);
    console.log("query:",query);
    let empIndex=employeesList.findIndex(ele=>ele.empno==params.empno)
    console.log("empIndex",empIndex);
    employeesList.splice(empIndex,1,body);
   // res.send(emps[0]);
     res.send("record is updated successfully")
})

app.delete("/employees/:empno",function(req,res){
    console.log("this from  deleteemployeebyid services");
    const{ body,params,query}=req;
    console.log("body:",body);
    console.log("params:",params);
    console.log("query:",query);
    employeesList=employeesList.filter(emp=>emp.empno !=params.empno)
    res.send("record is deleted successfully");
})

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