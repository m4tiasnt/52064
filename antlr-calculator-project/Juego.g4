grammar Juego;

// Lexer
JUEGO : 'juego' ;
LBRACKET : '{' ;
RBRACKET : '}' ;
PYC : ';' ;
ESCENA : 'escena' ;
MOSTRAR : 'mostrar' ;
LEER : 'leer' ;
SALTAR : 'saltar' ;
SI : 'si' ;
IGUAL : '==' ;
TEXTO : '"' .*? '"' ;
NOMBRE : IDENTIFICADOR ;  // REVISAR
VARIABLE : IDENTIFICADOR ;  // REVISAR
IDENTIFICADOR : [a-zA-Z][a-zA-Z0-9]* ;
VALOR : NUMERO | TEXTO ;
NUMERO : [0-9]+ ;

WS : [ \t\r\n]+ -> skip ; 


// Parser
juego
    : JUEGO NOMBRE LBRACKET escenas RBRACKET
    ;

escenas
    : escena*
    ;

escena
    : ESCENA NOMBRE LBRACKET acciones RBRACKET
    ;

acciones 
    : (imprimir | leer | condicion | saltar)* 
    ;

imprimir
    : MOSTRAR TEXTO PYC
    ;

leer
    : LEER VARIABLE PYC
    ;

condicion
    : SI comparacion SALTAR NOMBRE PYC
    ;

comparacion
    : VARIABLE IGUAL VALOR
    ;

saltar
    : SALTAR NOMBRE PYC
    ;



