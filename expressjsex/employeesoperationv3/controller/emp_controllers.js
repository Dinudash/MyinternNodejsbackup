exports.getEmployees=function(req,res){
    console.log("from getallemployees services");
    res.send(employeesList);
}
exports.createEmployees=function(req,res){
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
}
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