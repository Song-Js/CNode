var express = require('express');
var router = express.Router();
var topicCtrl=require("../controllers/topicController");
var userCheck=require("../middlewares/userCheck");


router.get("/create",userCheck,topicCtrl.create);
router.post("/docreate",userCheck,topicCtrl.docreate);

// 不管你是哪里来的请求  我只认topic/show/:id< 变量
router.get("/show/:id",userCheck,topicCtrl.showDetail);
router.post("/reply",userCheck,topicCtrl.reply);


module.exports = router;
