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
  const empObjs=[{  
    empno:101,
    ename:"Dinesh",
    job:" IT ENGINEER",
    sal:61000,
    deptno:20},

    {empno:102,
    ename:"Don",
    job:" ENGINEER",
    sal:67000,
    deptno:20
  },
  {empno:103,
  ename:"Dinu",
  job:" CLERK",
  sal:65000,
  deptno:30}
]

  Emp.insertMany(empObjs)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    