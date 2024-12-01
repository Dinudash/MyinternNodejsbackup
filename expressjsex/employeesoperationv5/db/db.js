var mongoose=require("mongoose");
var url ='mongodb://localhost:27017/angular_db'

mongoose.connect(url)
    .then(function(result){
        console.log("DB is connected successfully...");
        return
    })
    .catch(function(err){
        console.log("error occored while connecting DB");
        console.log(err);
        return
    
 })   

 module.exports=mongoose;