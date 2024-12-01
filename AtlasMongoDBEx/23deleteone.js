var mongodbDriver=require ('mongodb');
var mongoClient=mongodbDriver.MongoClient;
var url ="mongodb+srv://Dinesh:Dinu@cluster0.taovk7x.mongodb.net/test";
mongoClient.connect(url,function(err,dbConn){
    if(err){
      console.log("error occured..");
      console.log(err);
      return
    }
    var db=dbConn.db("cts");
    var empsDoc =  {
        empno:101,
        ename:"anil",
        job:"Bussines Analyst",
        sal:65000,
        email:"anil@mail.com"

    }
    db.collection("emps2").deleteOne(empsDoc,function(err,result){
        if(err){
            console.log(err);
        }
      console.log("result",result);
      dbConn.close();
      
    });
})