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
    ename:{type:String,required:true,minLength:3,maxLength:[7,"reached above maxlength"]},
    job:{type:String,required:true,enum:{values:["clerk","jr clerk","IT ENGINEER"]}},
    sal:{type: Number,min:[10000,"sal should not below 10000"],max:[200000,"sal should not greater than 200000"]},
    deptno:{type:Number,required:true,enum:{values:[10,20,30,40]}}
},{
    versionKey:false 
})

//step  4
// preparing  model
const Emp =mongoose.model("emps2",empSchema)

//step 5
//create object
  const empObj={  
    empno:105,
    ename:"Dhanushii",
    job:"jr clerk",
    sal:28000,
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
    mongoose.connection.close();
  })
