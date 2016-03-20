'use strict';

var express = require("express");

var app = express();
var path = process.cwd();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path + '/public/index.html');
});

app.get('/api/whoami', function (req, res) {
    res.json({ 
        ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress, 
        language: req.headers['accept-language'], 
        software: req.headers['user-agent']
    });
});

app.listen(process.env.PORT, function () {
	console.log('Node.js listening on port ' + process.env.PORT + '...');
});