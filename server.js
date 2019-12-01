var express =  require("express");
var productRouter= require("./routes/products")

var app =  express();
var bodyparser=require("body-parser");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json())

app.get('/',(request, response)=>{
response.send("welcome to backend");
});
app.use("/products", productRouter);

app.listen(9890, ()=>{
    console.log("Server Started at 9890");
});


