#!/usr/bin/env node
const https = require('https')
var express = require('express')
var logger = require("morgan");
var ip = process.env.IP || "0.0.0.0";
const fs = require('fs')
var port = process.env.PORT ||8001;
//require('./dist/index.js')




var path = require('path');
var serveStatic = require('serve-static');
var app = express();
app.use(logger("dev"));
//app.use(serveStatic(__dirname + "/vueapp/dist"));
app.use(express.static(__dirname + '/vueapp/dist'));
app.get('/dd',function(req,res){
  res.send("goit")
})
var port = 8001;
app.listen(port);
console.log('server started '+ port);

/*var server = app.listen(port, ip, function() {
  console.log('Open http://localhost:8001');
});*/

/*https.createServer({
  
}, app).listen(8001, () => {
  console.log('Listening...')
})*/
