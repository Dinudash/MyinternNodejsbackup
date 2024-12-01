var mongodbDriver=require('mongodb');
var monogoClient=mongodbDriver.MongoClient;
var url="mongodb+srv://Dinesh:Dinu@cluster0.taovk7x.mongodb.net/test";

monogoClient.connect(url,function(err,dbConn){
    if(err){
        console.log("Error Occured.....");
        console.log(err);
        return;
    }
    console.log("db is connected successfully.....")
    dbConn.close();
})