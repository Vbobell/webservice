var Client = require('../../class/client/client.js');
var Crud = require('../crud.js');
var crud = "";

function CrudClient(){
   this.crud = new Crud();
}

CrudClient.prototype.selectClient = function(callback){
    this.crud.select("select * from usuario", function(data){
        var clients = [];
        
        for(i = 0; i < data.length; i++){
            console.log(data[i]);
            this.client = new Client(data[i]);
            clients[i] = this.client;
        }
        return callback(JSON.parse(JSON.stringify(clients)));
    });
};

CrudClient.prototype.insertClient = function(client){
    var values = {"idPrestadorServico" : client.serviceProvider, "idTipoUsuario" : client.userType, 
                    "nome" : client.name, "cpf" : client.personalRegistry, "cidade" : client.address.city, 
                    "cep" : client.address.registre, "logradouro" : client.address.street};
    return (this.crud.insert('INSERT INTO usuario SET ?', values));
};

CrudClient.prototype.updateClient = function(client){
    var values = {"idPrestadorServico" : client.serviceProvider, "idTipoUsuario" : client.userType, 
                    "nome" : client.name, "cpf" : client.personalRegistry, "cidade" : client.address.city, 
                    "cep" : client.address.registre, "logradouro" : client.address.street};
    return (this.crud.update(`UPDATE usuario SET ? where ?`, values, {"idUsuario" : client.id}))
};

module.exports = CrudClient;