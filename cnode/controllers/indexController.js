var indexController={};

// 业务逻辑写在这
indexController.index=function(req, res, next) {
  res.render('index', { title: 'Hello world' });
};

module.exports=indexController;