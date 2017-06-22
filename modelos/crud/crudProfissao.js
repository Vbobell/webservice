var Profissao = require('../../modelos/classes/profissao/profissao.js');
var Crud = require('./crud.js');
var crud = "";
var profissao = "";
function CrudProfissao(){
   this.crud = new Crud();
}

CrudProfissao.prototype.selecionarProfissao = function(retorno){
    this.crud.select("select * from profissao", function(data){
        var profissoes = [];
        for(i = 0; i < data.length; i++){
            if(data[i] === undefined){}
            else{
            this.profissao = new Profissao(data[i].idprofissao, data[i].descricao);
            profissoes[i] = this.profissao;
            }
        }
        return retorno(profissoes);
    });
};

CrudProfissao.prototype.inserirProfissao = function(profissao){
    var valores = {"descricao" : profissao.descricao};
    return (this.crud.insert('INSERT INTO profissao SET ?', valores));
};

CrudProfissao.prototype.atualizarProfissao = function(profissao){
    var valores = {"descricao" : descricao};
    return (this.crud.update(`UPDATE profissao SET ? where ?`, valores, {"idProfissao" : profissao.idProfissao}))
};

module.exports = CrudProfissao;