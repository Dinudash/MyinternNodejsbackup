var mongodbDriver=require('mongodb');
var monogoClient=mongodbDriver.MongoClient;
var url="mongodb+srv://Dinesh:Dinu@cluster0.taovk7x.mongodb.net/test";
monogoClient.connect(url,function(err,dbConn){
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