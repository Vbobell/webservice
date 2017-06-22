const http = require('http');
var url = require('url');
const hostname = '127.0.0.1';

var Profissao = require('../modelos/classes/profissao/profissao.js');
var CrudProfissao = require('../modelos/crud/crudProfissao.js');
var crudProfissao = "";
var profissao = "";

const server = http.createServer((req, res) => {

this.result = url.parse(req.url, true);

if(this.result.pathname == "/favicon.ico"){ return };

this.crudProfissao = new CrudProfissao();
this.profissao = new Profissao(null, "Programador");
this.crudProfissao.inserirProfissao(this.profissao);
this.crudProfissao.selecionarProfissao((data) => {
    this.profissao = data; 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(
        console.log(this.profissao)
    );
});

}).listen(8080);