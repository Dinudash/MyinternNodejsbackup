var mongodbDriver=require ('mongodb');
var mongoClient=mongodbDriver.MongoClient;
var url ="mongodb+srv://Dinesh:Dinu@cluster0.taovk7x.mongodb.net/test";
mongoClient.connect(url,function(err,dbConn){
  if(err){
    console.log("error occured..");
    console.log(err);
    return
  }
  var db=dbConn.db("cohort_37_38");
  db.emps.aggregate({$project:{total_sal:{$add:["$sal","$comm"]}}}).sort({deptno:1}).toArray(function(err,result){
    console.log(result);
    dbConn.close();
  })
})