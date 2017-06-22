var http = require('http');
var url = require('url');
var fs = require('fs');
var request = require('request');
/*var Diretorio = require('./diretorio.js');
var diretorio = "";*/
var CrudProfissao = require('../modelos/crud/crudProfissao.js');
var crudProfissao = "";

var CrudServico = require('../modelos/crud/crudServico.js');
var crudServico = "";

var server = http.createServer(function (requisitado, resposta) {

    this.resultado = url.parse(requisitado.url, true);

    if (this.resultado.pathname == "/favicon.ico") { return }
/*
    this.diretorio = new Diretorio();

    this.diretorio.verificaDiretorio(this.resultado.pathname+'.js', (dadosDiretorio) => {
        console.log(JSON.stringify(dadosDiretorio).indexOf('jsonProfissao') > 0);*/
        
        if (this.resultado.pathname.indexOf('jsonProfissao') > 0) {
            this.crudProfissao = new CrudProfissao();
            this.crudProfissao.selecionarProfissao((dados) => {
                resposta.writeHeader(200, {
                    'Content-Type': 'utf8',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                });
                console.log(dados);
                resposta.write(JSON.stringify(dados));
                resposta.end();
            });
        }
        if (this.resultado.pathname.indexOf('jsonServico') > 0) {
            this.crudProfissao = new CrudServico();
            this.crudProfissao.selecionarServico((dados) => {
                resposta.writeHeader(200, {
                    'Content-Type': 'utf8',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                });
                console.log(dados);
                resposta.write(JSON.stringify(dados));
                resposta.end();
            });
        }
   // });
}).listen(8080);
