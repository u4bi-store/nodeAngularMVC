var http = require('http');
var serveStatic = require('serve-static');
var servePublic = serveStatic('public', {'index': ['index.html']});

http.createServer(handler).listen(8881, '127.0.0.1');

console.log('server on port: 8881');

function handler(req, res){
	res.setHeader('Access-Control-Allow-Origin', '127.0.0.1');
    servePublic(req, res, function nextHandler(req, res){});
}