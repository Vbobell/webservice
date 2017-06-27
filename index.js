var http = require('http');
var url = require('url');
var fs = require('fs');
var request = require('request');

var server = http.createServer(function (requisitado, resposta) {

    this.resultado = url.parse(requisitado.url, true);

    if (this.resultado.pathname == "/favicon.ico") { return }

    resposta.writeHead(200, {'Content-Type': 'text/plain'});
    resposta.end('Hello Node.JS!');
}).listen(5000);