var mongoose=require('mongoose');
var url ='mongodb://localhost:27017/cohort_37_38'

 mongoose.connect(url,function(err,result){
    if(err){
        console.log("error occured while connecting DB");
        return;
    }
    if(!err){
        console.log("DB is connected successfully...");
    }
 })