# Sobre el proyecto

Este proyecto es un analizador léxico, sintáctico y semántico para crear juegos simples. Fue desarrollado como parte de la materia "Sintaxis y Semántica de los Lenguajes" de la carrera de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional.

# Información sobre la gramática

La transcripción de la gramática asignada se encuentra en el archivo `gramaticaAsignada.md`. Sin embargo, fue necesario realizar algunos cambios para que la gramática fuera válida. A continuación se presenta la gramática corregida:

```
<juego> ::= "juego" <variable> "{" <escenas> "}"

<escenas> ::= { <escena> }
<escena> ::= "escena" <variable> "{" <acciones> "}"
<acciones> ::= { <imprimir> | <leer> | <condición> | <saltar> }

<imprimir> ::= "mostrar" <valor> ";"
<leer> ::= "leer" <variable> ";"
<condición> ::= "si" <comparación> "saltar" <variable> ";" 
<comparación> ::= <variable> "==" <valor>
<saltar> ::= "saltar" <variable> ";"

<valor> ::= <numero> | '"' { <caracter> } '"' 
<variable> ::= <caracter> { <caracter> | <digito> } 

<caracter> ::= "a" | "b" | ... | "z" | "A" | "B" | ... | "Z"
<digito> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<numero> ::= <digito> { <digito> }

```

A modo de resumen, los cambios realizados son los siguientes:
- Se unificaron las definiciones de `<nombre>` y `<variable>`, ya que ambas se refieren a un identificador.
- Se unificó `<texto>` y `<valor>`, ya que ambas se refieren a un valor que puede ser un número o una cadena de texto.
- Se modificó `<escena>` por `<variable>` en `<condición>`. 
- Se agregó la definición de `<saltar>` que no estaba presente.
- Se agregó la definición de `<texto>`, `<variable>`, `<valor>`, `<caracter>`, `<digito>` y `<numero>` para completar la gramática.
- No se permite el uso de caracteres acentuados. No estaba aclarado en la gramática dada y podría generar problemas con ANTLR o al momento de interpretar el código.

# Cómo ejecutar el proyecto

## Requisitos previos

- Tener instalado Java 1.8 o superior.
- Tener instalado Node.js 16 o superior.
- Tener instalado ANTLR 4.13.0 o superior.
- Tener instalado el plugin de ANTLR para Visual Studio Code (opcional, pero recomendado).

## Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/m4tiasnt/52064.git
   ```
2. Navegar al directorio del proyecto:   
   ```bash
   cd 52064/antlr-juego-project
    ```
3. Ejecutar el programa principal:
   ```bash
   node index.js
   ```

> [!NOTE]
> El programa se ejecuta con un archivo de entrada por defecto llamado `input.txt`. En este proyecto se adjuntan 4 entradas de ejemplo:
>
> - `input_correcto_1.txt`: es el ejemplo incluido con la gramática.
> - `input_correcto_2.txt`: es una entrada más compleja para desafiar al programa.
> - `input_incorrecto_1.txt`: tiene un error semántico dado que la escena referenciada no existe. 
> - `input_incorrecto_2.txt`: tiene un error sintáctico dado que falta el punto y coma al final de la línea.