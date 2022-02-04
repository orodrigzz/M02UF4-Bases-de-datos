#!/usr/bin/node

let http = require("http");

http.createServer(function(req, res){
	res.writeHead(200);

	let saludo = "<h1>ola k ase</>";

	res.end(saludo);

}).listen(1095);


