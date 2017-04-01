var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("hello world!")
});


app.get("/about", function(req, res){
	res.send("This is page about !")
});


app.get("/book/:century/:author/:bookName", function(req, res){
	var reqData = req.params;
	res.send("You've viewing '" + reqData.bookName + "' written " + reqData.author + " in " + reqData.century + " century ");
});

app.listen(3000, function(){
	console.log("Server started")
});