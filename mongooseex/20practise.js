var mongoose=require('mongoose');
var url='mongodb://localhost:27017/cohort_37_38'
mongoose.connect(url,function(err,result){
    if(err){
        console.log("error occured during conecting db");
        return;
    }
    if(!err){
        console.log("DB is connected successfully..");
    }
})
var empSchema=new mongoose.Schema({
    empno:Number,
    ename:String,
    job:String,
    mgr:Number,
    hiredate:Date,
    sal:Number,
    comm:Number,
    deptno:Number
})

var Emp=mongoose.model("emp",empSchema)

Emp.find().where({$or: [{sal: {$lt:1000}},{sal: {$gt:2500}}]})
          .select({_id:0,empno:1,ename:1,sal:1,deptno:1})
          .sort({sal: -1}).exec(function(err,result){
        if(err){
            console.log("error occured");
            console.log(err);
            return;
        }
        console.log(result);
        mongoose.connection.close();
 })