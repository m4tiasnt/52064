// Generated from c:/Users/moliva/Desktop/sintaxis/52064/antlr-calculator-project/Juego.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JuegoListener from './JuegoListener.js';
import JuegoVisitor from './JuegoVisitor.js';

const serializedATN = [4,1,17,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,26,8,1,10,
1,12,1,29,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,41,8,3,10,3,12,
3,44,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,63,0,18,1,0,
0,0,2,27,1,0,0,0,4,30,1,0,0,0,6,42,1,0,0,0,8,45,1,0,0,0,10,49,1,0,0,0,12,
53,1,0,0,0,14,59,1,0,0,0,16,63,1,0,0,0,18,19,5,1,0,0,19,20,5,12,0,0,20,21,
5,2,0,0,21,22,3,2,1,0,22,23,5,3,0,0,23,1,1,0,0,0,24,26,3,4,2,0,25,24,1,0,
0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,27,1,0,0,0,
30,31,5,5,0,0,31,32,5,12,0,0,32,33,5,2,0,0,33,34,3,6,3,0,34,35,5,3,0,0,35,
5,1,0,0,0,36,41,3,8,4,0,37,41,3,10,5,0,38,41,3,12,6,0,39,41,3,16,8,0,40,
36,1,0,0,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,
1,0,0,0,42,43,1,0,0,0,43,7,1,0,0,0,44,42,1,0,0,0,45,46,5,6,0,0,46,47,5,11,
0,0,47,48,5,4,0,0,48,9,1,0,0,0,49,50,5,7,0,0,50,51,5,13,0,0,51,52,5,4,0,
0,52,11,1,0,0,0,53,54,5,9,0,0,54,55,3,14,7,0,55,56,5,8,0,0,56,57,5,12,0,
0,57,58,5,4,0,0,58,13,1,0,0,0,59,60,5,13,0,0,60,61,5,10,0,0,61,62,5,15,0,
0,62,15,1,0,0,0,63,64,5,8,0,0,64,65,5,12,0,0,65,66,5,4,0,0,66,17,1,0,0,0,
3,27,40,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JuegoParser extends antlr4.Parser {

    static grammarFileName = "Juego.g4";
    static literalNames = [ null, "'juego'", "'{'", "'}'", "';'", "'escena'", 
                            "'mostrar'", "'leer'", "'saltar'", "'si'", "'=='" ];
    static symbolicNames = [ null, "JUEGO", "LBRACKET", "RBRACKET", "PYC", 
                             "ESCENA", "MOSTRAR", "LEER", "SALTAR", "SI", 
                             "IGUAL", "TEXTO", "NOMBRE", "VARIABLE", "IDENTIFICADOR", 
                             "VALOR", "NUMERO", "WS" ];
    static ruleNames = [ "juego", "escenas", "escena", "acciones", "imprimir", 
                         "leer", "condicion", "comparacion", "saltar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JuegoParser.ruleNames;
        this.literalNames = JuegoParser.literalNames;
        this.symbolicNames = JuegoParser.symbolicNames;
    }



	juego() {
	    let localctx = new JuegoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JuegoParser.RULE_juego);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(JuegoParser.JUEGO);
	        this.state = 19;
	        this.match(JuegoParser.NOMBRE);
	        this.state = 20;
	        this.match(JuegoParser.LBRACKET);
	        this.state = 21;
	        this.escenas();
	        this.state = 22;
	        this.match(JuegoParser.RBRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escenas() {
	    let localctx = new EscenasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JuegoParser.RULE_escenas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 24;
	            this.escena();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escena() {
	    let localctx = new EscenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JuegoParser.RULE_escena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(JuegoParser.ESCENA);
	        this.state = 31;
	        this.match(JuegoParser.NOMBRE);
	        this.state = 32;
	        this.match(JuegoParser.LBRACKET);
	        this.state = 33;
	        this.acciones();
	        this.state = 34;
	        this.match(JuegoParser.RBRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acciones() {
	    let localctx = new AccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JuegoParser.RULE_acciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 960) !== 0)) {
	            this.state = 40;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 6:
	                this.state = 36;
	                this.imprimir();
	                break;
	            case 7:
	                this.state = 37;
	                this.leer();
	                break;
	            case 9:
	                this.state = 38;
	                this.condicion();
	                break;
	            case 8:
	                this.state = 39;
	                this.saltar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JuegoParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(JuegoParser.MOSTRAR);
	        this.state = 46;
	        this.match(JuegoParser.TEXTO);
	        this.state = 47;
	        this.match(JuegoParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JuegoParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(JuegoParser.LEER);
	        this.state = 50;
	        this.match(JuegoParser.VARIABLE);
	        this.state = 51;
	        this.match(JuegoParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JuegoParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(JuegoParser.SI);
	        this.state = 54;
	        this.comparacion();
	        this.state = 55;
	        this.match(JuegoParser.SALTAR);
	        this.state = 56;
	        this.match(JuegoParser.NOMBRE);
	        this.state = 57;
	        this.match(JuegoParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparacion() {
	    let localctx = new ComparacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JuegoParser.RULE_comparacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(JuegoParser.VARIABLE);
	        this.state = 60;
	        this.match(JuegoParser.IGUAL);
	        this.state = 61;
	        this.match(JuegoParser.VALOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	saltar() {
	    let localctx = new SaltarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JuegoParser.RULE_saltar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(JuegoParser.SALTAR);
	        this.state = 64;
	        this.match(JuegoParser.NOMBRE);
	        this.state = 65;
	        this.match(JuegoParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JuegoParser.EOF = antlr4.Token.EOF;
JuegoParser.JUEGO = 1;
JuegoParser.LBRACKET = 2;
JuegoParser.RBRACKET = 3;
JuegoParser.PYC = 4;
JuegoParser.ESCENA = 5;
JuegoParser.MOSTRAR = 6;
JuegoParser.LEER = 7;
JuegoParser.SALTAR = 8;
JuegoParser.SI = 9;
JuegoParser.IGUAL = 10;
JuegoParser.TEXTO = 11;
JuegoParser.NOMBRE = 12;
JuegoParser.VARIABLE = 13;
JuegoParser.IDENTIFICADOR = 14;
JuegoParser.VALOR = 15;
JuegoParser.NUMERO = 16;
JuegoParser.WS = 17;

JuegoParser.RULE_juego = 0;
JuegoParser.RULE_escenas = 1;
JuegoParser.RULE_escena = 2;
JuegoParser.RULE_acciones = 3;
JuegoParser.RULE_imprimir = 4;
JuegoParser.RULE_leer = 5;
JuegoParser.RULE_condicion = 6;
JuegoParser.RULE_comparacion = 7;
JuegoParser.RULE_saltar = 8;

class JuegoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_juego;
    }

	JUEGO() {
	    return this.getToken(JuegoParser.JUEGO, 0);
	};

	NOMBRE() {
	    return this.getToken(JuegoParser.NOMBRE, 0);
	};

	LBRACKET() {
	    return this.getToken(JuegoParser.LBRACKET, 0);
	};

	escenas() {
	    return this.getTypedRuleContext(EscenasContext,0);
	};

	RBRACKET() {
	    return this.getToken(JuegoParser.RBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterJuego(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitJuego(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitJuego(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escenas;
    }

	escena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscenaContext);
	    } else {
	        return this.getTypedRuleContext(EscenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscenas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscenas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escena;
    }

	ESCENA() {
	    return this.getToken(JuegoParser.ESCENA, 0);
	};

	NOMBRE() {
	    return this.getToken(JuegoParser.NOMBRE, 0);
	};

	LBRACKET() {
	    return this.getToken(JuegoParser.LBRACKET, 0);
	};

	acciones() {
	    return this.getTypedRuleContext(AccionesContext,0);
	};

	RBRACKET() {
	    return this.getToken(JuegoParser.RBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_acciones;
    }

	imprimir = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImprimirContext);
	    } else {
	        return this.getTypedRuleContext(ImprimirContext,i);
	    }
	};

	leer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LeerContext);
	    } else {
	        return this.getTypedRuleContext(LeerContext,i);
	    }
	};

	condicion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CondicionContext);
	    } else {
	        return this.getTypedRuleContext(CondicionContext,i);
	    }
	};

	saltar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SaltarContext);
	    } else {
	        return this.getTypedRuleContext(SaltarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterAcciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitAcciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitAcciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_imprimir;
    }

	MOSTRAR() {
	    return this.getToken(JuegoParser.MOSTRAR, 0);
	};

	TEXTO() {
	    return this.getToken(JuegoParser.TEXTO, 0);
	};

	PYC() {
	    return this.getToken(JuegoParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_leer;
    }

	LEER() {
	    return this.getToken(JuegoParser.LEER, 0);
	};

	VARIABLE() {
	    return this.getToken(JuegoParser.VARIABLE, 0);
	};

	PYC() {
	    return this.getToken(JuegoParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_condicion;
    }

	SI() {
	    return this.getToken(JuegoParser.SI, 0);
	};

	comparacion() {
	    return this.getTypedRuleContext(ComparacionContext,0);
	};

	SALTAR() {
	    return this.getToken(JuegoParser.SALTAR, 0);
	};

	NOMBRE() {
	    return this.getToken(JuegoParser.NOMBRE, 0);
	};

	PYC() {
	    return this.getToken(JuegoParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_comparacion;
    }

	VARIABLE() {
	    return this.getToken(JuegoParser.VARIABLE, 0);
	};

	IGUAL() {
	    return this.getToken(JuegoParser.IGUAL, 0);
	};

	VALOR() {
	    return this.getToken(JuegoParser.VALOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterComparacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitComparacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitComparacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SaltarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_saltar;
    }

	SALTAR() {
	    return this.getToken(JuegoParser.SALTAR, 0);
	};

	NOMBRE() {
	    return this.getToken(JuegoParser.NOMBRE, 0);
	};

	PYC() {
	    return this.getToken(JuegoParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterSaltar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitSaltar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitSaltar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JuegoParser.JuegoContext = JuegoContext; 
JuegoParser.EscenasContext = EscenasContext; 
JuegoParser.EscenaContext = EscenaContext; 
JuegoParser.AccionesContext = AccionesContext; 
JuegoParser.ImprimirContext = ImprimirContext; 
JuegoParser.LeerContext = LeerContext; 
JuegoParser.CondicionContext = CondicionContext; 
JuegoParser.ComparacionContext = ComparacionContext; 
JuegoParser.SaltarContext = SaltarContext; 
