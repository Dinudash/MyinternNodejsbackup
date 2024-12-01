var Emp=require('../models/emps')


exports.getEmployees= function(req,res){
    console.log("all employee ..............")

      Emp.find().exec(function(err,result){
      res.send(result);
     })

}


 exports. getEmployeeid=function(req,res){
  const {params, query, body}=req;
  console.log("params:",params);
  console.log("query:",query);
  console.log("body:",body);

  Emp.findById(params._id).exec(function(err,result){
    res.send(result);
  })

 // let emp=employeelist.filter(emp=>emp.empno==params.empno)
 // res.send(emp[0]);
}

exports. createEmployees=function(req,res){
  const {params, query, body}=req;
  console.log("params:",params);
  console.log("query:",query);
  console.log("body:",body);



//  let empNoslist= employeelist.map(emp=>emp.empno)
 // let maxNo=0
 // if(empNoslist.length===0){
 // maxNo=100;
//}
  //else
 //  maxNo=Math.max(...empNoslist)
 //  body.empno=maxNo+1;
 //  employeelist=[...employeelist,body];
 // console.log("save successfully");
 // res.send(body);

var empObj=new Emp(body);
empObj.save(function(err,result){
  res.send(result);
})



}

exports. updateemployee=function(req,res){
  const {params, query, body}=req;
  console.log("params:",params);
  console.log("query:",query);
  console.log("body:",body);

 Emp.updateOne({_id:params._id},body).exec(function(err,result){
  res.send(result)
 })
}

exports.deleteEmployees=function(req,res){
  const {params, query, body}=req;
  console.log("params:",params);
  console.log("query:",query);
  console.log("body:",body);

  Emp.deleteOne({_id:params._id}).exec(function(err,result){
    res.send(result)
  })
}


