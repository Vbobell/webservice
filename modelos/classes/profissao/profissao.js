var idProfissao = "";
var descricao = "";

function Profissao(idProfissao, descricao){
    this.idProfissao = idProfissao;
    this.descricao = descricao;
}

Profissao.prototype.getId = function(callback){
  return callback(this.idProfissao);
};

Profissao.prototype.getdescricao = function(callback){
    return callback(this.descricao);
}

module.exports = Profissao;