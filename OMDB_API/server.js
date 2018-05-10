const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

server.listen(3300, ()=>{console.log("Server running succesfully on port 3300.")})