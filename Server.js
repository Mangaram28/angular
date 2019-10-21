var express = require('express');
var app = express();

app.use(express.static("myApp"));

app.get('/', function (req, res) {
    res.redirect('myApp/index.html');
});

app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");
