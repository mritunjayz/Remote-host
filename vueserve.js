const https = require('https')
var express = require('express')
var logger = require("morgan");
var ip = process.env.IP || "0.0.0.0";
const fs = require('fs')
var port = process.env.PORT ||8001;




var path = require('path');
var serveStatic = require('serve-static');
var app = express();
app.use(logger("dev"));
app.use(serveStatic(__dirname + "/vueapp/dist"));
//var port = process.env.PORT || 5000;
//app.listen(port);
//console.log('server started '+ port);

/*var server = app.listen(port, ip, function() {
  console.log('Express server listening on port ' + port);
});*/

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(3000, () => {
  console.log('Listening...')
})
