var express =  require("express");
var router =  express.Router();
var db=require('../db');
var  utils=require('../utils')



router.get("/",(request, response)=>{
    var queryText = "select id,title,description,price from product";
    var connection=db.connect();
    connection.query(queryText,(error, data)=>{
        response.send(utils.createResult(error,data))
        
    });
});
router.post("/",(request, response)=>{
   

    var {title,description,price}=request.body
    var connection=db.connect();
    var queryText =`insert into product(title,description,price) values('${title}','${description}',${price})`;
   
    connection.query(queryText,(error, data)=>{
        
        response.send(utils.createResult(error,data))
        
    });
});

module.exports =router;
