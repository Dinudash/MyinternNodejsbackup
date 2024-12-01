var mongoose=require('../db/db');

const empSchema=new mongoose.Schema({
    ename:String,
    job:String,
    email:String,
    salary:Number,

},{
    versionKey:false,
}
)

const Emp=mongoose.model("emps",empSchema);
module.exports=Emp;