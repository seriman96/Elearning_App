var express = require("express");
var router = express.Router();
var adminService  = require('./../controllers/toolController');

router.post('/',adminService.createadmin); 


 
module.exports=router;