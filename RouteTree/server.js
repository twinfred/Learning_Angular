const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./server/config/mongoose'); // DATABASE
require('./server/config/routes')(app); // ROUTES
app.all("*", (req, res) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
})

server.listen(5454, ()=>{console.log("This server is running on port 5454!")});