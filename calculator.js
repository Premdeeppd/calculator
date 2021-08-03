const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1) ;
  var num2 = Number(req.body.n2) ;

  var result = num1 + num2 ;

  res.send("The result of calculation is " + result) ;
});

app.listen(3000, function(){
  console.log("Server started at port 3000");
});
