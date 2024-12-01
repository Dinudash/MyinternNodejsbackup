  //step 1
 
const mongoose=require('mongoose');
const url ='mongodb://localhost:27017/cohort_37_38'
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
var empSchema= new mongoose.Schema({
    empno:Number,
    ename:String,
    job:String,
    mgr:Number,
    hiredate:Date,
    sal:Number,
    comm:Number,
    deptno:Number
})

//step  4
// preparing  model
var Emp =mongoose.model("emps",empSchema)

//step 5
//fetching data using     model
Emp.find({sal: {$lt:1500}}).exec(function(err,result){
    if(err) {
        console.log("error occured");          
        console.log(err);
        return;                                            
    }
     console.log(result); 
     mongoose.connection.close();
})            