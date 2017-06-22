var idServico = "";
var profissao = "";
var precoHora = "";
var descricao = "";

function Servico(idServico, profissao, precoHora, descricao){
    this.idServico = idServico;
    this.profissao = profissao;
    this.precoHora = precoHora;
    this.descricao = descricao;
}

module.exports = Servico;