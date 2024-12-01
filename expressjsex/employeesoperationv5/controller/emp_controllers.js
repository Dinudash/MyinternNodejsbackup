const Emp=require('../models/emps')



exports.getEmployees=function(req,res){
    console.log("from getallemployees services");
    //res.send(employeesList);
    Emp.find().exec(function(err,result){
        res.send(result);
    })
}
exports.getEmployeeById=function(req,res){
    console.log("this from  getemployeebyid services");
    const{ body,params,query}=req;
    console.log("body:",body);
    console.log("params:",params);
    console.log("query:",query);

    Emp.findById(params._id).exec(function(err,result){
        res.send(result);
    })

   // let emps=employeesList.filter(emp=>emp.empno==params.empno)
    //res.send(emps[0]);
}

exports.createEmployees=function(req,res){
    console.log("from postemployee services ");
  //console.log(req);
   const{ body,params,query}=req;
   console.log("body:",body);
   console.log("params:",params);
   console.log("query:",query);
  // let empNosList=employeesList.map(emp=>emp.empno);
 //  let maxNo=0;
 //  if(empNosList.length=== 0)
  // {
  //   maxNo=100;
  //  }
  //  else
  //     maxNo=Math.max(...empNosList)
  // body.empno=maxNo + 1;

  // employeesList=[...employeesList,body]
  //  console.log("New record is successfully saved");
   //res.send("New record is successfully saved.....")
  //  res.send(body);
  const empObj= new Emp(body);
  empObj.save(function(err,result){
    res.send(result);
})

}
exports.updateemployee=function(req,res){
    console.log("this from  updateemployeebyid services");
    const{ body,params,query}=req;
    console.log("body:",body);
    console.log("params:",params);
    console.log("query:",query);
    Emp.updateOne({_id:params._id},body).exec(function(err,result){
        res.send(result)
    })
   // res.send(emps[0]);
    // res.send("record is updated successfully")
}


exports.deleteEmployee=function(req,res){
    console.log("this from  deleteemployeebyid services");
    const{ body,params,query}=req;
    console.log("body:",body);
    console.log("params:",params);
    console.log("query:",query);
    Emp.deleteOne({_id:params._id},body).exec(function(err,result){
        res.send(result)
    })
}
