var express= require ('express')
var app = express();

app.use(express.json());
app.listen(4000,function(error){
    if(error){
        console.log("Error occured ");
    }
    else{
        console.log("app is started successfully and listening on port 4000..");
    }
});

