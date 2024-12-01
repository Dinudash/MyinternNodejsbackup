var mongoose=require('../db/db')

//step 1
// create  schema
var empSchema = new mongoose.Schema({
   ename:String,
   job:String,
   email:String,
   salary:Number,

}, {
    versionkey:false,
})

//step 2
//create model
var Emp=mongoose.model("emps",empSchema)

module.exports=Emp;