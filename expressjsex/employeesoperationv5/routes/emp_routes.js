var express=require("express");
var empOperation=require('../controller/emp_controllers');
var router=express.Router();

router.get("/employees",empOperation.getEmployees)
router.post("/employees",empOperation.createEmployees)

module.exports=router;

