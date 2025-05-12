# Tarea: Construcción de un Analizador con ANTLR4 y JavaScript

## Tema: 25914_7

Se proporciona una gramática en notación **EBNF** que describe un lenguaje específico. Utilizando **ANTLR4** con **JavaScript**, implemente un analizador que procese un archivo de entrada (`input.txt`) con código fuente escrito en dicho lenguaje.

### Gramática

```ebnf
<juego> ::= "juego" <nombre> "{" <escenas> "}"
<escenas> ::= { <escena> }
<escena> ::= "escena" <nombre> "{" <acciones> "}"
<acciones> ::= { <imprimir> | <leer> | <condición> | <saltar> }
<imprimir> ::= "mostrar" <texto> ";"
<leer> ::= "leer" <variable> ";"
<condición> ::= "si" <comparación> "saltar" <escena> ";"
<comparación> ::= <variable> "==" <valor>
```

### Requisitos del Analizador

El analizador deberá realizar las siguientes tareas:

1. **Análisis léxico y sintáctico**  
    Realizar el análisis léxico y sintáctico sobre el código fuente e informar si la entrada es correcta o contiene errores. En caso de errores, indicar la línea en la que ocurren y la causa del problema.

2. **Tabla de lexemas-tokens**  
    Generar una tabla que contenga los lexemas y sus respectivos tokens reconocidos durante el análisis léxico.

3. **Árbol de análisis sintáctico**  
    Construir y mostrar el árbol de análisis sintáctico concreto de la entrada. Puede representarse en formato de texto.

4. **Interpretación**  
    Traducir el código fuente al lenguaje **JavaScript** y ejecutarlo como lo haría un intérprete básico.

El desarrollo debe entregarse cumpliendo las pautas para la entrega establecidas en el documento _Pautas de trabajo para analizador_.

---

### Ejemplo de Código

#### Entrada en el lenguaje definido

```plaintext
juego Aventura {
     escena Introducción {
          mostrar "Bienvenido a la aventura.";
     }
}
```

#### Traducido a JavaScript

```javascript
const miClima = {
     imprimir: function(texto, minutos) {
          setInterval(function() { console.log(texto); }, minutos * 600);
     }
};
miClima.imprimir("clima frio", 5);
```