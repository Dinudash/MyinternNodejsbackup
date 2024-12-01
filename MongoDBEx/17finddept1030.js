var mongodbDriver=require ('mongodb');
var mongoClient=mongodbDriver.MongoClient;
var url ="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,dbConn){
  if(err){
    console.log("error occured..");
    console.log(err);
    return;
  }
  var db=dbConn.db("cohort_37_38");
  db.collection("emps").find({deptno:{$in:[10,30]}},{projection:{_id:0,ename:1,sal:1,deptno:1}}).sort({sal:-1}).toArray(function(err,result){
    console.log(result);
    dbConn.close();
  })
})