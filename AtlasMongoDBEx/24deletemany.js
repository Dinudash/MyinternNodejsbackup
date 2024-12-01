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
    var empsDoc = [{
        empno:101,
        ename:"anil",
        job:"Bussines Analyst",
        sal:65000,
        email:"anil@mail.com"

    },
    {
        empno:102,
        ename:"Dinesh",
        job:"Engineer",
        sal:55000,
        email:"dinesh@mail.com"
} ,
 {
       empno:103,        
       ename:"adam",
       job:" Clerk",
       sal:85000,
       email:" adam@mail.com"
 }]
    db.collection("emps2").deleteMany(empsDoc,function(err,result){
        if(err){
            console.log(err);
        }
      console.log("result",result);
      dbConn.close();
      
    });
})  