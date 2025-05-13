import JuegoVisitor from "./generated/JuegoVisitor.js";

export class CustomJuegoVisitor extends JuegoVisitor {

    constructor(debug = false) {
        super();
        this.memoria = new Map(); // Memoria para las variables y sus valores
        this.escenas = new Map(); // Memoria para las escenas 
        this.listaEscenas = []; // Lista de escenas en orden en el que aparecen en la entrada
        this.escenaActual = null; // Escena actual
        this.escenaSiguiente = null; // Escena siguiente a la que saltar
        this.debug = debug; // Bandera para activar/desactivar mensajes de depuración
    }

    // Función para mostrar mensajes de depuración si el modo debug está activado
    logDebug(message) {
        if (this.debug) {
            console.log(`\x1b[90m${message}\x1b[0m`); // Gray debug message
        }
    }

    // Encontrar la siguiente escena en la lista de escenas
    encontrarSiguienteEscena(escenaActual) {
        const indiceActual = this.listaEscenas.indexOf(escenaActual);
        if (indiceActual !== -1 && indiceActual < this.listaEscenas.length - 1) {
            return this.listaEscenas[indiceActual + 1];
        }
        return null; // No hay más escenas
    }

    

    async leerEntrada(variable) {
        const readline = await import('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const valor = await new Promise((resolve) => {
            rl.question(`Ingrese un valor para ${variable}: `, (input) => {
                rl.close();
                resolve(input);
            });
        });

        return valor;
    }

    // Método principal con el que se comienza a recorrer el juego
    visitJuego(ctx) {
        this.logDebug("Iniciando juego");

        // Primera pasada - guardamos todas las escenas en memoria 
        const escenasCtx = ctx.escenas();
        this.listaEscenas = [];

        for (let i = 0; i < escenasCtx.escena().length; i++) {
            const escenaCtx = escenasCtx.escena()[i];
            const nombreEscena = escenaCtx.VARIABLE().getText();
            this.escenas.set(nombreEscena, escenaCtx);
            this.listaEscenas.push(nombreEscena);
        }

        // Comenzamos con la primera escena
        if (escenasCtx.escena().length > 0) {
            const primerEscena = escenasCtx.escena()[0].VARIABLE().getText();
            this.ejecutarEscena(primerEscena);
        }

        return null; 
    }

    // Método para ejecutar una escena determinada
    async ejecutarEscena(nombreEscena) {
        const escenaCtx = this.escenas.get(nombreEscena);
        if (!escenaCtx) {
            console.log(`\x1b[31mError: No se encontró la escena "${nombreEscena}"\x1b[0m`);
            return;
        }

        this.escenaActual = nombreEscena;
        this.escenaSiguiente = null;

        this.logDebug(`Escena: ${nombreEscena}`);
        this.logDebug("Ejecutando acciones");

        // Ejecutar las acciones de la escena
        const accionesCtx = escenaCtx.acciones();
        for (let i = 0; i < accionesCtx.children.length; i++) {
            const accion = accionesCtx.children[i];
            await this.visit(accion);

            // Si se ha definido una escena siguiente, saltamos 
            if (this.escenaSiguiente) {
                await this.ejecutarEscena(this.escenaSiguiente);
                return;
            }
        }

        // Si completamos todas las acciones y no hay salto definido, 
        // continuamos con la siguiente escena que sigue en el orden de aparición
        const proximaEscenaEnOrden = this.encontrarSiguienteEscena(nombreEscena);
        if (proximaEscenaEnOrden) {
            this.logDebug(`No se especificó salto, continuando con la siguiente escena: ${proximaEscenaEnOrden}`);
            await this.ejecutarEscena(proximaEscenaEnOrden);
        } else {
            this.logDebug("Fin del juego - no hay más escenas");
        }
    }

    visitEscenas(ctx) {
        // Saltamos este método ya que lo manejamos en visitJuego
        return null;
    }

    visitEscena(ctx) {
        // Saltamos este método ya que lo manejamos en ejecutarEscena
        return null;
    }

    visitAcciones(ctx) {
        // Saltamos este método ya que lo manejamos en ejecutarEscena
        return null;
    }
    
    visitImprimir(ctx) {
        const valor = ctx.VALOR().getText();
        // Si es una cadena, eliminamos las comillas
        const texto = valor.startsWith('"') ? valor.substring(1, valor.length - 1) : valor;
        console.log(texto); 
        return null;
    }

    async visitLeer(ctx) {
        const variable = ctx.VARIABLE().getText();
        const valor = await this.leerEntrada(variable);
        this.memoria.set(variable, valor);
        this.logDebug(`Variable ${variable} leída con valor: ${valor}`);
        return null;
    }

    visitCondicion(ctx) {
        const variable = ctx.comparacion().VARIABLE().getText();
        const valorRaw = ctx.comparacion().VALOR().getText();
        // Si es una cadena, eliminamos las comillas
        const valor = valorRaw.startsWith('"') ? valorRaw.substring(1, valorRaw.length - 1) : valorRaw;
        const salto = ctx.VARIABLE().getText();

        const valorVariable = this.memoria.get(variable);
        this.logDebug(`Comparando ${variable} == ${valor}`);

        if (valorVariable == valor) {
            this.logDebug(`Condición cumplida, saltando a: ${salto}`);
            this.escenaSiguiente = salto;
        } else {
            this.logDebug("Condición no cumplida, no se realiza el salto.");
        }
        return null;
    }

    visitComparacion(ctx) {
        return null; // Saltamos este método ya que lo manejamos en visitCondicion
    }
    
    visitSaltar(ctx) {
        const variable = ctx.VARIABLE().getText();
        this.logDebug(`Saltando a: ${variable}`);
        this.escenaSiguiente = variable;
        return null;
    }
}

export default CustomJuegoVisitor;
