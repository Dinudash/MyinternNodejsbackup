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


Emp.deleteOne({empno:103},{$inc: {sal:2000}}).exec(function(err,result){
    console.log(err);
    console.log(result);
})
  