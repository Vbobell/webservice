var idClient = "";
var name = "";
var personalRegistry = "";
var userType = ""
var address = "";
var serviceProvider = "";


function Client(id, name, personalRegistry, address, userType, serviceProvider){
    this.id = id;
    this.name = name;
    this.personalRegistry = personalRegistry;
    this.userType = userType;
    this.address = address;
    this.serviceProvider = serviceProvider;
}

/*function Client(id){
  this.idClient = id;
}*/
Client.prototype.getId = function(callback){
  return callback(this.id);
};

Client.prototype.setId = function(id){
  this.id = id;
};

Client.prototype.getName = function(callback){
  return callback(this.name);
};

Client.prototype.setName = function(name){
  this.name = name;
};

Client.prototype.getPersonalRegistry = function(callback){
  return callback(this.personalRegistry);
};

Client.prototype.setPersonalRegistry = function(personalRegistry){
  this.personalRegistry = personalRegistry;
};

Client.prototype.getUserType = function(callback){
  return callback(this.userType);
};

Client.prototype.setUserType = function(userType){
  this.userType = userType;
};

Client.prototype.getAddress = function(callback){
  return callback(this.address);
};

Client.prototype.setAddress = function(address){
  this.address = address;
};

Client.prototype.getServiceProvider = function(callback){
  return callback(this.serviceProvider);
};

Client.prototype.setServiceProvider = function(serviceProvider){
  this.serviceProvider = serviceProvider;
};


module.exports = Client;