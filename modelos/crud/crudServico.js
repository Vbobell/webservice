var Servico = require('../../modelos/classes/servico/servico.js');
var Profissao = require('../../modelos/classes/profissao/profissao.js');
var Crud = require('./crud.js');
var crud = "";
var servico = "";
var profissao = "";

function CrudServico(){
   this.crud = new Crud();
}

CrudServico.prototype.selecionarServico = function(retorno){
    this.crud.select("select * from prestadorservico", function(data){
        var servicos = [];
        for(i = 0; i < data.length; i++){
            if(data[i] === undefined){}
            else{
            this.profissao = new Profissao(data[i].idprofissao);
            this.servico = new Servico(data[i].idprestadorservico, this.profissao, data[i].precohora, data[i].descricao);
            servicos[i] = this.servico;
            }
        }
        return retorno(servicos);
    });
};

CrudServico.prototype.inserirServico = function(Servico){
    var valores = {"descricao" : Servico.descricao};
    return (this.crud.insert('INSERT INTO servico SET ?', valores));
};

CrudServico.prototype.atualizarServico = function(Servico){
    var valores = {"descricao" : descricao};
    return (this.crud.update(`UPDATE servico SET ? where ?`, valores, {"idServico" : Servico.idServico}))
};

module.exports = CrudServico;