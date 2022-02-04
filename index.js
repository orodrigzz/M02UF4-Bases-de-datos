#!/usr/bin/node

let http = require("http");

let mongo_client = require("mongodb").MongoClient;

let url = "mongodb://localhost/";

console.log("Inisiando escrí");

mongo_client.connect(url, function(error, conn) {
	console.log("Dentro");

	if (error){
		console.log ("ERROR");
		return; }
	
	let db = conn.db("tffhd");

	let info = db.collection("characters").find();

	console.log(info);

});

/*

http.createServer(function(req, res){
	res.writeHead(200);

	let saludo = "<h1>ola k ase</h1>";

	res.end(saludo);

}).listen(1095);

*/
