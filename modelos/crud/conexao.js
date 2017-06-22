var mysql = require('mysql');
var connectionBase = "";

function ConnectionBase(local,users,base){
  this.connectionBase = mysql.createConnection({
    host     : local,
    user     : users,
    database : base
  });
}

Conexao.prototype.getConnectionBase = function(callback){
  return callback(this.connectionBase);
}

module.exports = ConnectionBase;

