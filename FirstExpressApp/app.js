console.log("APP CONNECTED");

var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/", function(req, res){
    res.send("hi there");
})
// "/bye" => "Bye there"
app.get("/bye", function(req, res){
    res.send("Bye there");
})
// "/dog" => "meow!"
app.get("/dog", function(req, res){
    console.log("someone made a request to /dog")
    res.send("meow!"); 
})

app.get("/r/:subredditName", function(req, res){
    var redditName = req.params.subredditName;
    res.send("Welcome to "+ redditName);
})

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    res.send("here are the comments")
})

app.get("*", function(req, res){
    console.log("this page doesn't seem to exist BRO");
    res.send("you can't see this page. nuh uh!")
})
//Tell express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
;});