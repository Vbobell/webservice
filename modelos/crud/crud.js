var mysql = require('mysql');
var connectionCrud = "";

function Crud(){
  this.connectionCrud = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'servicelist'
  });
}

Crud.prototype.select = function(search,returnRow){
  this.connectionCrud.query(search, function(error, rows, fields){
    if (error){
        throw error;
    }
    else{
      row =  rows;
    }
    return returnRow(row);
  });
};

Crud.prototype.insert = function(insert, values){
 this.connectionCrud.query(insert, values, function (error, results, fields) {
    if (error) throw error;
    console.log("Number of records inserted: " + results.affectedRows);
 }); 
};
Crud.prototype.update = function(update, values, id){
 this.connectionCrud.query(update, [values, id], function (error, results, fields) {
    if (error) throw error;
    console.log("Number of records editions: " + results.affectedRows);
 }); 
};

module.exports = Crud;