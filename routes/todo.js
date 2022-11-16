var express = require('express');
var router = express.Router();
const Controller = require('../controller/index')
const sendResponse = require("../Helper/sendResponse");




router.post("/addtodoCard", (req, res) => {
    payload=req.body
    return sendResponse.executeMethod(Controller.todoController.addTodoCards, payload, req, res);
  });
  router.get("/getAllTodoCards", (req, res) => {
      let payload = req.query;
    
    return sendResponse.executeMethod(Controller.todoController.getTodoCards,payload,req,res);
  });
module.exports = router;
