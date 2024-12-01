//step 1
 
const mongoose=require('mongoose');
const url ='mongodb://localhost:27017/cts'
//step 2
 mongoose.connect(url,function(err,result){
    if(err){
        console.log("error occured while connecting DB");
        return
    }
    if(!err){
        console.log("DB is connected successfully...");
    }
 })   
//step 3
//preparing schema
const empSchema= new mongoose.Schema({
    empno:Number,
    ename:String,
    job:String,
    sal:Number,
    deptno:Number
})

//step  4
// preparing  model
const Emp =mongoose.model("emps2",empSchema)

//step 5
//create object
  const empObj={  
    empno:101,
    ename:"Dinesh",
    job:"IT ENGINEER",
    sal:55000,
    deptno:10
  }

  //step 6
  //create object by using model
  const mongEmpObj=new Emp(empObj);
  //step 7
  //save obj to db
  mongEmpObj.save(function(err,result){
    if(err)
        console.log(err);
    if(!err){
            console.log("document inserted successfully");
            console.log(result);
    }
    
  })
