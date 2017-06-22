var fs = require('fs');
var pasta = "";
var verificaDiretorio = "";

function Diretorio(pasta) {
    this.pasta = pasta;
}

Diretorio.prototype.verificaDiretorio = function (pasta, dados) {
        verifica = this.verificaDiretorioDiretorio(pasta, (dados) => dados);
    if(fs.existsSync(verifica))
        return dados(verifica)
    else
        return dados({"error" : "not json request"});
};

Diretorio.prototype.retornaCaminho = function (dados) {
    return dados(this.pasta);
};

Diretorio.prototype.setpasta = function (pasta) {
    this.pasta = pasta;
};

Diretorio.prototype.verificaDiretorioDiretorio = function (pasta, dados) {
    var d = __dirname;
    d = d.split("rotas");
    return dados(d[0] + pasta);
};

module.exports = Diretorio;