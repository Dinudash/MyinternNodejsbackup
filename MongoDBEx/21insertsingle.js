var mongodbDriver=require ('mongodb');
var mongoClient=mongodbDriver.MongoClient;
var url ="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,dbConn){
    if(err){
      console.log("error occured..");
      console.log(err);
      return
    }
    var db=dbConn.db("cohort_37_38");
    var empsDoc =  {
        empno:101,
        ename:"dubai",
        job:"Shop owner",
        sal:70000,
        email:"dubai@mail.com"

    }
    db.collection("emps").insertOne(empsDoc,function(err,result){
        if(err){
            console.log(err);
        }
      console.log("result",result);
      dbConn.close();
      
    });
})