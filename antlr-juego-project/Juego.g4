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
VALOR : [0-9]+ | '"' .*? '"' ;  // Define VALOR before TEXTO to prioritize it in comparisons
TEXTO : '"' .*? '"' ;
NUMERO : [0-9]+ ;
VARIABLE : [a-zA-Z][a-zA-Z0-9]* ;

WS : [ \t\r\n]+ -> skip ; 


// Parser
juego
    : JUEGO VARIABLE LBRACKET escenas RBRACKET
    ;

escenas
    : escena*
    ;

escena
    : ESCENA VARIABLE LBRACKET acciones RBRACKET
    ;

acciones 
    : (imprimir | leer | condicion | saltar)* 
    ;

imprimir
    : MOSTRAR VALOR PYC
    ;

leer
    : LEER VARIABLE PYC
    ;

condicion
    : SI comparacion SALTAR VARIABLE PYC
    ;

comparacion
    : VARIABLE IGUAL VALOR
    ;

saltar
    : SALTAR VARIABLE PYC
    ;



