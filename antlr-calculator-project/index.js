import JuegoLexer from "./generated/JuegoLexer.js";
import JuegoParser from "./generated/JuegoParser.js";
import { CustomJuegoListener } from "./CustomJuegoListener.js";
import { CustomJuegoVisitor } from "./CustomJuegoVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Ingrese una expresión: ', (input) => {
            rl.close();
            resolve(input);
        });
    });
}

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new JuegoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new JuegoParser(tokenStream);
    let tree = parser.juego();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    }
    
    // Imprimo el arbol como texto - util para debug
    console.log(tree.toStringTree(parser.ruleNames));

    // Utilizando un visitor para recorrer el árbol (opcional)
    let visitor = new CustomJuegoVisitor();
    visitor.visit(tree);

    // Utilizando un listener para recorrer el árbol (opcional)
    let listener = new CustomJuegoListener();
    let walker = new ParseTreeWalker();
    walker.walk(listener, tree);
}

main().catch(err => {
    console.error('Error:', err);
});
