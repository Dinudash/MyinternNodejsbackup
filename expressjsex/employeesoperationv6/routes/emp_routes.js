var express=require("express");
var empOperation=require('../controller/emp_controllers');
var router=express.Router();

router.get("/employees",empOperation.getEmployees)
router.get("/employees/:_id",empOperation.getEmployeeid)
router.post("/employees",empOperation.createEmployees)
router.put("/employees/:_id",empOperation.updateemployee)
router.delete("/employees/:_id",empOperation.deleteEmployees)

module.exports=router;

