var mongodbDriver=require ('mongodb');
var mongoClient=mongodbDriver.MongoClient;
var url ="mongodb+srv://Dinesh:Dinu@cluster0.taovk7x.mongodb.net/test";
mongoClient.connect(url,function(err,dbConn){
  if(err){
    console.log("error occured..");
    console.log(err);
    return;
  }
  var db=dbConn.db("cohort_37_38");
  db.collection("emps").find({},{projection:{ename:1,sal:1,deptno:1}}).sort({ename:1}).toArray(function(err,result){
    console.log(result);
    dbConn.close();
  })
})