// Followed instructions from https://www.youtube.com/watch?v=kHV7gOHvNdk

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World from server.js")
});

app.listen(3000);
console.log("Server running on port 3000");