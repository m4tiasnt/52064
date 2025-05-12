import { Parser } from "antlr4";
import JuegoVisitor from "./generated/JuegoVisitor.js";
import JuegoParser from "./generated/JuegoParser.js";

export class CustomJuegoVisitor extends JuegoVisitor {

    constructor() {
        super();
        this.memory = new Map();   //Declaro una variable de instancia con una memoria temporal para hacer las reducciones
    } 
    
    // Implement visitor methods for your Juego grammar
    // For example:
    
    visitJuego(ctx) {
        return this.visitChildren(ctx);
    }
    
    visitEscenas(ctx) {
        return this.visitChildren(ctx);
    }
    
    visitEscena(ctx) {
        return this.visitChildren(ctx);
    }
    
    visitAcciones(ctx) {
        return this.visitChildren(ctx);
    }
    
    visitImprimir(ctx) {
        const texto = ctx.TEXTO().getText();
        console.log(`Mostrando: ${texto.substring(1, texto.length - 1)}`);
        return this.visitChildren(ctx);
    }
    
    visitLeer(ctx) {
        const variable = ctx.VARIABLE().getText();
        console.log(`Leyendo variable: ${variable}`);
        return this.visitChildren(ctx);
    }
    
    visitCondicion(ctx) {
        console.log("Evaluando condición");
        return this.visitChildren(ctx);
    }
    
    visitComparacion(ctx) {
        const variable = ctx.VARIABLE().getText();
        const valor = parseInt(ctx.VALOR().getText());
        console.log(`Comparando ${variable} igual a ${valor}`);
        return this.visitChildren(ctx);
    }
    
    visitSaltar(ctx) {
        const variable = ctx.VARIABLE().getText();
        console.log(`Saltando a: ${variable}`);
        return this.visitChildren(ctx);
    }
}
