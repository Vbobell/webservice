
CREATE TABLE profissao (
  idprofissao int NOT NULL AUTO_INCREMENT primary key,
  descricao varchar(80) DEFAULT NULL
);

CREATE TABLE prestadorservico (
  idprestadorservico int NOT NULL AUTO_INCREMENT primary key,
  idprofissao int NOT NULL,
  precohora double DEFAULT NULL,
  descricao varchar(80) DEFAULT NULL,
  foreign key (idprofissao) references profissao (idprofissao)
);


CREATE TABLE telefone (
  idtelefone int NOT NULL AUTO_INCREMENT primary key,
  ddd varchar(3) NOT NULL,
  numero varchar(9) DEFAULT NULL
);


CREATE TABLE tipousuario (
  idTipoUsuario int NOT NULL AUTO_INCREMENT primary key,
  descricao varchar(50) NOT NULL
);


CREATE TABLE usuario (
  idUsuario int NOT NULL AUTO_INCREMENT primary key,
  idPrestadorServico int NOT NULL,
  idTipoUsuario int NOT NULL,
  nome varchar(30) DEFAULT NULL,
  cpf varchar(11) DEFAULT NULL,
  cidade varchar(40) DEFAULT NULL,
  cep varchar(8) DEFAULT NULL,
  estado varchar(2) DEFAULT NULL,
  numero int NULL,
  complemento int NULL,
  logradouro varchar(60) DEFAULT NULL,
  foreign key (idPrestadorServico) references prestadorservico (idPrestadorServico),
  foreign key (idTipoUsuario) references tipousuario (idTipoUsuario)
);

CREATE TABLE usuariotelefone (
  idtelefone int NOT NULL,
  idUsuario int NOT NULL,
  foreign key (idtelefone) references telefone (idtelefone),
  foreign key (idUsuario) references usuario (idUsuario)
);