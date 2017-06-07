var express = require("express");
var app = express();

// visiting "/" should print "hi there welcome to my express assignment"

app.get("/", function(req, res){
    res.send("Hi there welcome to my express assignment!");
})

//visiting "/speak/pig" should print out "The pig says Oink"
//  "             /dog"                 " "The Dog says woof"
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var greets = {
        pig: "Oink",
        dog: "woof",
        cat: "meow",
        cow: "moo",
        fish: "blargh"
    }
    var greet = greets[animal];
    res.send("The " + animal +" says " + greet);
})

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = parseInt(req.params.num);
    var result = "";
    
    for(var i = 0; i < num; i++){
    result += word + " ";
    }
    
    res.send(result);
})

app.get("/*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
;});

//visiting "/repeat/hello/3" should print out "hello hello hello"
//visiting "/repeat/blah/2" should print out "blah blah"
