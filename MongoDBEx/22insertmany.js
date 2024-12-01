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
    var empsDoc = [{
        empno:102,
        ename:"anil",
        job:"Bussines Analyst",
        sal:65000,
        email:"anil@mail.com"

    },
    {
        empno:103,
        ename:"Dinesh",
        job:"Engineer",
        sal:55000,
        email:"dinesh@mail.com"
} ,
 {
       empno:104,        
       ename:"adam",
       job:" Clerk",
       sal:85000,
       email:" adam@mail.com"
 },
      {
        empno:105,        
        ename:"Ram",
        job:" Driver",
        sal:85000,
        email:" ram@mail.com"
      }
]
    db.collection("emps").insertMany(empsDoc,function(err,result){
        if(err){
            console.log(err);
        }
      console.log("result",result);
      dbConn.close();
      
    });
})