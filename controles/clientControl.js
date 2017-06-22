var CrudClient = require('../models/crud/client/crudClient.js');
var crudClient = "";

function ClientControl(){
    this.crudClient = new CrudClient();
}

ClientControl.prototype.getClientData = function(getData){
    this.crudClient.selectClient((data) =>{
        return getData(data);
    });
}

module.exports = ClientControl;