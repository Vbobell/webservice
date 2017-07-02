drop table prestador

create table prestador(
	idPrestador serial NOT NULL primary key,  
    imagem varchar(30) DEFAULT NULL, 
    nome varchar(30) DEFAULT NULL,
    profissao varchar (30) DEFAULT NULL
);

insert into prestador (imagem, nome, profissao) values ('2130837595','Pedro','Eletricista');
insert into prestador (imagem, nome, profissao) values ('2130837596','Renata','Empregada');
insert into prestador (imagem, nome, profissao) values ('2130837603','Joao','Marceneiro');
insert into prestador (imagem, nome, profissao) values ('2130837615','Ricardo','Pedreiro');

create table endereco(
	idEndereco serial NOT NULL primary key,  
    idPrestador int NOT NULL,
    cidade varchar (30) DEFAULT NULL,
    bairro varchar (40) DEFAULT NULL,
    endereco varchar (50) DEFAULT NULL,
    foreign key (idPrestador) references prestador (idPrestador)
); 

insert into endereco (idprestador, cidade, bairro, endereco) values (1, 'Porto Alegre - RS', 'Praia de Belas', 'Rua Pacatuba, 105');
insert into endereco (idPrestador, cidade, bairro, endereco) values (2, 'Caxias - RS', 'Floresta', 'Rua Sergipe, 415');
insert into endereco (idprestador, cidade, bairro, endereco) values (3, 'Pelotas - RS', 'Floresta', 'Rua dos Marceneiros, 1154');
insert into endereco (idprestador, cidade, bairro, endereco) values (4, 'Porto Alegre - RS', 'Floresta', 'R. Franklin de Campos Sobral
 1675');

create table contato(
	idContato serial NOT NULL primary key, 
    idPrestador int NOT NULL,
    dddT varchar (2) DEFAULT NULL,
    telefone varchar (10) DEFAULT NULL,
    dddW varchar (2) DEFAULT NULL,
    whats varchar (10) DEFAULT NULL,
    email varchar (50) DEFAULT NULL,
    foreign key (idPrestador) references prestador (idPrestador)
);

insert into contato (idprestador, dddT, telefone, dddW, whats, email) 
values (1, '51', '999887744', '51', '88997711', 'pedro@eletricista.com.br');
insert into contato (idprestador, dddT, telefone, dddW, whats, email) 
values (2, '54', '744741452', '54', '852524645', 'renata@empregada.com.br');
insert into contato (idprestador, dddT, telefone, dddW, whats, email) 
values (3, '53', '665566332', '53', '445541451', 'joao@marceneiro.com.br');
insert into contato (idprestador, dddT, telefone, dddW, whats, email) 
values (4, '55', '11110212', '53', '654456212', 'ricardo@pedreiro.com.br');


select * from prestador;
select * from endereco;
select * from contato;

SELECT prestador.imagem, prestador.nome, prestador.profissao,
endereco.cidade, endereco.bairro, endereco.endereco,
contato.dddT, contato.telefone, contato.dddW, contato.whats, contato.email 
FROM prestador, endereco, contato
WHERE prestador.idPrestador = endereco.idPrestador 
AND prestador.idPrestador = contato.idPrestador;