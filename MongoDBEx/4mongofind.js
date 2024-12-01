var mongodbDriver=require('mongodb');
var mongoClient=mongodbDriver.MongoClient;
var url="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,dbConn){
    if(err){
        console.log("Error Occured.....");
        console.log(err);
        return;
    }
    var db=dbConn.db("cohort_37_38");
    db.collection("emps").find().toArray(function(err,result){
        console.log(result);
        dbConn.close();
    })
   
})