var mongodbDriver=require('mongodb');
var mongoClient=mongodbDriver.MongoClient;
var url="mongodb://localhost:27017/";

mongoClient.connect(url,function(err,dbConn){
    if(err){
        console.log("Error Occured.....");
        console.log(err);
        return;
    }
    console.log("db is connected successfully.....")
    dbConn.close();
})