import JuegoLexer from "./generated/JuegoLexer.js";
import JuegoParser from "./generated/JuegoParser.js";
import { CustomJuegoListener } from "./CustomJuegoListener.js";
import { CustomJuegoVisitor } from "./CustomJuegoVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

// Leer la entrada del usuario por teclado
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
    const debugMode = process.argv.includes('--debug');

    // Intento leer la entrada desde el archivo especificado 
    try {
        input = fs.readFileSync('input.txt', 'utf8');
        console.log(`Leyendo del archivo input.txt`);
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        console.log(`No se pudo leer el archivo input.txt. Error: ${err.message}`);
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Procesar la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new JuegoLexer(inputStream);
    
    // Verificar si el lexer está generando tokens 
    console.log("\nVerificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    // Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------------------------------------------------");
    console.log("| Lexema                                                            | Token                |");
    console.log("--------------------------------------------------------------------------------------------");
    
    // Recorro todos los tokens generados por el lexer
    tokens.forEach(token => {
        const tokenType = JuegoLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(65)} | ${tokenType.padEnd(20)} |`);
    });
    console.log("--------------------------------------------------------------------------------------------");

    // Reiniciar el flujo de tokens para el parser dado que la función getAllTokens() vacía el lexer
    inputStream = CharStreams.fromString(input);
    lexer = new JuegoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new JuegoParser(tokenStream);
    let tree = parser.juego(); 

    // Verificar si se produjeron errores sintácticos
    if (parser.numberOfSyntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
        return;
    } else {        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\nÁrbol de derivación: \n${cadena_tree}`);

        // Recorremos el árbol para realizar la interpretación
        const visitor = new CustomJuegoVisitor(debugMode);
        console.log("\n----------------------------------------------------------------------");
        console.log("Interpretación del programa ingresado");
        console.log("----------------------------------------------------------------------");
        if (debugMode) {
            console.log("Modo debug activado. Se mostrarán mensajes de depuración.");
        }
        visitor.visit(tree);
    }
}

main().catch(err => {
    console.error('Error:', err);
});
