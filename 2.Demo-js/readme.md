# ISD Coders Pre-inscripción

## Tema1. Introducción. Datos y Variables

- Sentencias. La primera aplicación
- Ejecutando JS [📹video 1]
  - Comentarios de código
- Datos
- Variables [📹video 2]
  - Variables en JS
  - Declaración de variables con let. Asignación de valores
  - Declaración de variables con y asignación de valores con const
  - Sentencias de asignación
- Operaciones con strings. Concatenación
  - Template strings

## Tema2. Tipos de datos

- Tipos de datos del estándar de JS [📹video 3]
  - El operador typeof
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Bigint
  - Symbol
  - Object
- Tipado de las variables
- Objetos
- Arrays [📹video 4]
  - Métodos de arrays
  - Métodos mutables de arrays
  - Métodos no mutables de arrays
  - Ordenando arrays

## Tema3. Sentencias de código

- Expresiones. Operadores

  - Operadores de asignación
  - Operadores aritméticos
  - Operadores de comparación
  - Casting y coercion
  - Casos pintorescos de coercion
  - Coercion a boolean

- Sentencias de control. Concepto
- Iteraciones (Bucles) [📹video 5]
  - Números aleatorios
  - While
  - For
  - Iterables
  - Arrays multi dimensionales. Bucles anidados
- Condiciones [📹video 6]
  - If - else
  - Switch - case
  # Introducción. Datos y Variables

- Sentencias. La primera aplicación
- Ejecutando JS
  - Comentarios de código
- Datos
- Variables
  - Variables en JS
  - Declaración de variables con let. Asignación de valores
  - Declaración de variables con y asignación de valores con const
  - Sentencias de asignación
- Operaciones con strings. Concatenación
  - Template strings

## Sentencias. La primera aplicación

La programación imperativa (la que se utiliza normalmente) consiste en la creación de una serie se **sentencias** (statements) que se van a ejecutar una tras otra, dándole a nuestra máquina las instrucciones de lo que queremos que haga.

En JavaScript (JS) es fácil distinguir estas sentencias:

- en principio cada una de ellas ocupa una linea
- para que quede aun más claro, sobre todo si no se cumple lo primero, terminamos las sentencias con un punto y coma (;)

A la hora de crear las sentencias del código usaremos las palabras reservadas del lenguaje, los nombres de variables y funciones y los operadores. En todos los casos, tienes que tener en cuenta que el lenguaje JS **distingue mayúsculas y minúsculas** (case sensitive). Por ejemplo las palabra reservada `for` no puede ser sustituida por For o FOR.

Nuestra primera aplicación, el _'Hola mundo'_ que se suele usar en programación como el ejemplo más simple de cualquier lenguaje, se limita a una única sentencia.

```js
console.log("Hola mundo");
```

## Ejecutando JS

> [📹video 1](https://www.youtube.com/watch?v=nWPuJXN9U8c)

Por el momento puedes usar la misma herramienta online que te servirá para la prueba de admisión: [Code Interview](https://codeinterview.io/)

Tendrás que crear una cuenta y confirmar el correo que recibes.

Una vez dentro de la aplicación podrás crear un espacio de trabajo seleccionando "_new interview_" .
Aparecerá un ejemplo de código y en la parte inferior podrás cambiar el lenguaje a "_JavaScript (Node)_"

Después de eliminar el ejemplo que se muestra en la pantalla, podrás teclear o copiar tu código JS.

> 🛠️ Prueba con el `console.log("Hola mundo");` y para ver que funciona pulsa en el botón "_Run_" de la parte inferior.

### Comentarios de código

Quizás te has fijado que el ejemplo que borraste comenzaba con unas líneas un poco diferentes: los **comentarios** de nuestro código.

En JS hay dos formas de hacerlo, como puedes ver a continuación

```js
// Comentario de una línea, termina al final de esta

/*
 Comentario de multiples líneas
 No termina hasta que aparecen los siguientes símbolos
*/
```

## Datos

El objetivo de estas sentencias es resolver alguna necesidad planteada por los futuros usuarios de nuestra aplicación.
En gran parte eso supone tomar una serie de **datos** y modificarlos de acuerdo con las funcionalidades requeridas en nuestra aplicación, para terminar entregando el resultado a los usuarios, lo que incluye, en muchos casos, mostrar esos datos o alguno de ellos en la pantalla.

Al conjunto de los datos de la realidad que nos interesan para nuestro problema concreto lo denominamos **modelo de datos**. Si mi aplicación es para una escuela, la edad de las personas puede ser relevante, y por tanto parte del modelo, pero probablemente no me interese en absoluto su nivel de colesterol o su talla de zapatos, que por tanto no formaran parte del modelo de datos.

🎯 Los **valores** de los datos pueden ser de diferentes **tipos**; únicamente 8 en el caso de JS. De momento quédate con la idea de los más evidentes.

- textos o cadenas de caracteres (tipo **string**), que indicaremos entre comillas simples (''), dobles ("") o inclinadas (``)
- números (tipo **number**), incluyendo tanto enteros y decimales, como positivos y negativos

Por ejemplo podemos tener como valores 'Pepe' o 'rojo', de tipo string, y 23 o -2.5 de tipo number.

## Variables

Sin embargo, los valores solos, sin corresponder a algún elemento del problema que tratamos de resolver, no tienen apenas utilidad. ¿Quién es Pepe? ¿Qué es rojo? ¿Qué es lo que vale 23 o -2.5?. Ahí es donde entra en juego la necesidad de definir a que se refiere cada dato, como combinaciones de un valor con una clave o referencia, que se denomina **variable**:

- userName = 'Pepe',
- colorCoche = 'rojo',
- edad = 23,
- saldo = -2.5.

🎯 Técnicamente podemos decir que las **variables** son **etiquetas** (labels) que hacen referencia a un valor o que dan nombres a las localizaciones donde se almacenan (named storage) los valores.

Esos etiquetas le confieren sentido a los diferentes valores de los datos, indicando a que parte de nuestro modelo corresponden.

A veces se usan las metáforas de etiquetas que _apuntan_ a un valor, para que sepamos a que se refiere o de _cajas con nombre_ donde se guardan los valores.

### Variables en JS

> [📹video 2](https://www.youtube.com/watch?v=g-jejKpehQw&t=2s)

Por convenio, los nombres de las variables en JS utilizan un formato de escritura denominada **camelCase**, que consiste en

- empezar siempre con minúscula
- juntar las palabras empezando cada una de ellas con mayúscula

Sólo en el caso de las funciones constructoras o las clases (que veras en el precurso), se utiliza **PascalCase**, poniendo también en mayúscula la primera letra del nombre.

Para poder usar una variable, tenemos que

- declararla (sería como crear la etiqueta que mencionábamos anteriormente)
- asignarle un valor (inicializarla)

Ambos procesos pueden ser simultáneos, en una misma sentencia, o separarse en dos.

🎯 La declaración de variables en JS se realiza mediante las palabras reservadas **let** y **const**

### Declaración de variables con let. Asignación de valores

La palabra reservada **let** declara una variable cuyo valor puede ser reasignado tantas veces como sea necesario.
Por tanto la declaración puede incluir una asignación inicial o dejarlo para más adelante

```js
// declaramos una variable sin asignarle valor
// (en realidad JS le da un valor undefined, pero eso no debe importarte ahora)
let foo;
console.log(foo); // undefined
// más adelante le asignamos un valor
foo = "Pepe";
console.log(foo); // 'Pepe'
// declaramos una variable y le asignamos un valor
let bar = 20;
console.log(bar); // 20
// le reasignamos un nuevo valor a la variable anterior
bar = 30;
console.log(bar); // 30
```

> 🛠️ Puedes probar este código en _Code Interview_. Los valores comentados después de cada console.log() aparecerán en la consola de la derecha, que muestra el resultado de la ejecución de nuestro código.

### Declaración de variables con y asignación de valores con const

La palabra reservada **const** declara una variable cuyo valor NO puede ser reasignado nunca, por lo que siempre debe incluir la asignación del valor de la variable.

```js
// declaramos una variable asignándole su valor
const foo = "Valor para siempre";
console.log(foo); // 'Pepe'
// Si intentas ejecutar la línea siguiente
// Tendrás un error de ejecución:
// TypeError: Assignment to constant variable.
foo = "Nuevo valor";
```

---

🥷 Esto no significa que las variables de tipo const no puedan **cambiar de valor**. Ya veremos que si se trata de objetos, se pueden añadir, eliminar y modificar sus propiedades sin que se reasigne un nuevo valor. Esto se conoce como **mutabilidad**.

---

### Sentencias de asignación

Tanto con let como con const hemos visto que la asignación de valor se realiza gracias al **operador de asignación**, que es el símbolo igual (=)

- a la izquierda de este operador siempre estará la **variable** o variables que reciben un valor
- todo lo que haya a la derecha del operador constituye uns **expresión** (expression)

Las expresiones pueden ser

- literales, es decir valores
- variables
- cualquier combinación de los anteriores mediante operadores

🎯 Las expresiones siempre se evalúan a un único valor, que en las sentencias de asignación, se asigna a la correspondiente variable de la izquierda del igual.

Veamos unos ejemplos

```js
// Tenemos dos variables que luego usaremos
const initial = 11;
// En esta sentencia asignamos directamente una expresión literal (o simplemente literal)
const result1 = 22;
// En este caso la expresión cuyo valor asignamos opera con literales y variables
const result2 = initial * 2;
// En este caso la expresión cuyo valor asignamos opera con variables
const result3 = initial + initial;
// El valor de las tres variables es idéntico, con independencia de comp ha sido obtenido
console.log(result1, result2, result3); // 22 22 22
```

## Operaciones con strings. Concatenación

Para conseguir valores de tipo string, utilizamos **comillas** simples ('') o dobles ("") en principio indistintamente. En distintos equipos de programación o conjuntos de reglas de estilo, se decide por una de las dos opciones. Lo importante es la coherencia del código, y que no se mezclen en el mismo proyecto las dos formas de crear strings.

🎯 Si se necesita unir varias cadenas de caracteres se utiliza el operador de concatenación (+).

```js
const name = "Pepe";
const age = 34;
// creamos una expresión que concatena varias cadenas,
// tanto literales como variables
// y asignamos el resultado de evaluar la expresión
// a una nueva variable
const greetings = "Hola, me llamo " + name + " y tengo " + age + " años!!";
console.log(greetings); // Hola, me llamo Pepe y tengo 34 años!!
```

---

🥷 Este símbolo + corresponde también al operador de signo positivo y al de la suma de números, por lo que se dice que es un operador sobrecargado. Como veremos esto puede dar problemas en algunos casos.

---

### Template strings

En JS moderno, creado desde 2015 y conocido como ECMAScript 6+ (ES6+) hay una nueva forma de crear los strings, conocida como **template strings**, que se definen mediante comillas inclinadas (``).
Además de conservar el formato en el que escribamos (espacios, tabuladores, saltos de línea), estos strings permiten interpolar variables mediante el operador ${}

```js
const name = "Pepe";
const age = 34;
// creamos una expresión que concatena varias cadenas,
// mediante un template string
const greetings = `Hola, me llamo ${name} y tengo ${age} años!!`;
console.log(greetings); // Hola, me llamo Pepe y tengo 34 años!!
```

Como puedes ver este formato simplifica mucho la concatenación, por lo que se utiliza habitualmente en lugar del anterior.
# Sentencias de código

- Expresiones. Operadores

  - Operadores de asignación
  - Operadores aritméticos
  - Operadores de comparación
  - Casting y coercion
  - Casos pintorescos de coercion
  - Coercion a boolean

- Sentencias de control (ver 03)

## Expresiones. Operadores

Como ya sabemos, las sentencias de JS pueden incorporar **expresiones**. Tas es el caso de las sentencias de asignación o de las condicione que aparecerán en las sentencias de control que luego veremos.

Una expresión puede incluir literales, variables y operadores y siempre se evalúa a un **único valor**.

Existen distintos tipos de operadores

- operadores de asignación
- operadores aritméticos
- operadores de comparación
- operadores bit a bit
- operadores lógicos
- operadores de cadena
- operador condicional (ternario)
- operador coma
- operadores unarios
- operadores relacionales

### Operadores de asignación

Como ya sabemos el operador de **asignación** es el simbolo **igual** (=)

---

🥷Existen además una serie de operadores que combinan la asignación con una operación aritmética escribiéndolo de forma abreviada. Excepto el primero, no se usan mucho y por el momento ppuedes olvidarte de ellos

- asignación de adición x += y (x = x + y)
- asignación de resta x -= y (x = x - y)
- asignación de multiplicación x _= y (x = x /_ y)
- asignación de división x /= y (x = x / y)
- asignación de resto x %= y (x = x % y)
- asignación de exponenciación x \*_= y (x = x /_/\* y)

---

### Operadores aritméticos

Operaciones aritméticas estándar

- suma (+)
- resta (-)
- producto (\*)
- división (/)
- resto o módulo (%)
- exponente (\*\*)
- signo positivo (+)
- signo negativo (-)

Otros aritméticos mutables, que modifican la variable a la que se aplican

- incremento (++)
- decremento (--)

```js
const num = 3;
console.log(num + num); // 6
console.log(num - num); // 0
console.log(num * num); // 9
console.log(num / num); // 1
console.log(num % num); // 0
console.log(num ** num); // 27
console.log(+num); // 3
console.log(-num); // -3

let num1 = 3;
num1++;
console.log(num1); // 4
num1--;
console.log(num1); // 3
```

### Operadores de comparación

Como su nombre indica comparan dos valores y devuelven un valor lógico (boolean), true o false, en función del resultado.

Comparaciones de igualdad

- Igual (==). Devuelve true si los operandos son iguales.
- No es igual (!=). Devuelve true si los operandos no son iguales.
- Estrictamente igual (===). Devuelve true si los operandos son iguales y del mismo tipo.
- Desigualdad estricta (!==). Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.

```js
const foo = 3;
const bar = 4;
// Igualdad
console.log(3 == foo); // true
console.log('3' == foo); // true
console.log(3 == '3'); // true
console.log(foo != 4); // true
console.log(bar != '3'); // true
// Igualdad estricta
console.log(3 === foo); // true
console.log(foo !== '3'); // true
console.log(3 !== '3'); // true
```

Mayor o menor

- Mayor que (>)
- Mayor o igual que (>=)
- Menor que (<)
- Menor o igual (<=)

```js
const foo = 3;
const bar = 4;
console.log(bar > foo); // true
console.log('12' > 2); // true
console.log(bar >= foo); // true
console.log(foo >= 3); // true
console.log(foo < bar); // true
console.log('2' < 12); // true
console.log(foo <= bar); // true
```

Para entender el funcionamiento de los operadores en relación con los tipos tenemos que mencionar los conceptos de casting y coercion.

### Casting y coercion

Casting es el proceso de utilización durante una determinada operación del equivalente a una variable cambiándole el tipo, con el fin de poder llevar a cabo la operación. Dicho de otra manera, es la acción de forzar a que una variable se comporte como si fuera de otro tipo.

Este proceso puede ser

- explícito, cuando se indica en el código que se debe producir. Se suele denominar casting
- implícito, cuando lo realiza automáticamente el lenguaje. Se suele denominar coercion. En JS este proceso se realiza siempre que resulta necesario para que se pueda evaluar una expresión.

Veamos un ejemplo para terminar de entender el proceso.

```js
const foo = 12; // tipo number
const bar = '3'; // tipo string

const result = foo / bar;

// La división solo tiene sentido entre dos operadores numéricos
// JS aplica sus reglas de coercion y en lugar del valor real de bar utiliza su equivalente numérico 3
// De esta forma puede evaluar la expresión 12/3 a 4 y asignar el resultado a result

console.log(result, typeof result); // 4 number

// Como puedes ver ni foo ni bar han cambiado ni de valor ni de tipo
console.log(foo, typeof foo); // 12 number
console.log(bar, typeof bar); // 3 string
```

En algunos casos las reglas de coercion no dan el resultado esperado y es necesario emplear un casting explicito para corregirlas. De momento basta con que sepas que estos procesos existen.

### Casos pintorescos de coercion

Pese a lo que acabamos de decir, hay un par de situaciones de JS que pueden resultar sorprendentes y que vamos a comentar

El primero de ellos se refiere al **operador +**, que incluye tanto las suma como la concatenación, pero da prioridad a esta última.

```js
const foo = 3;
const bar = '4';
const result = foo + bar;
console.log(result, typeof result); // 34 string
```

Para evitar esta situación podemos emplear el **casting explicito** a number:

- con la función de casting Number()
- aplicando el operador de signo +

```js
const foo = 3;
const bar = '4';
let result = foo + bar;
console.log(result, typeof result); // 34 string
result = foo + Number(bar);
console.log(result, typeof result); // 7 number
result = foo + +bar;
console.log(result, typeof result); // 7 number
```

El segundo caso se refiere a la **coercion a number de los string**. Con un string numérico no hay problema: en lugar de '9' usamos el número 9. Pero, ¿como puede JS calcular el numero equivalente a un string que no se refiere a números?. Para eso existe una entidad especial, dentro del conjunto de los valores de tipo number, conocida como **NaN** (not-a-number) que representa un número cuyo valor es indeterminado.

Aunque matemáticamente existen la indeterminaciones, en la práctica suele ser poco util un valor Nan. Ya aprenderás como programamos para evitas que aparezcan valores NaN

### Coercion a boolean

El caso más llamativo en que JS realiza la coercion automática es cuando se espera un boolean, como en las condiciones de if o the while que luego veremos. En esta situación cualquier variable se convierte a true, y se denomina **truthy**, excepto unos pocos valores conocidos como **falsy**

- false
- 0, -0 y 0n (el bigInt 0)
- undefined
- null
- NaN (el numero indeterminado, not-a-number)
- '' (el string vacío)

Para que compruebes esta conversión podemos usar la función de casting explicito Boolean

```js
console.log(Boolean(false)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false
```

> 🛠️ Si pruebas cualquier otro valor, veras que se evalúa a true
# Sentencias de control

- Concepto
- Iteraciones (Bucles)
  - Números aleatorios
  - While
  - For
  - Iterables
  - Arrays multi dimensionales. Bucles anidados
- Condiciones
  - If - else
  - Switch - case

## Concepto

Ya sabemos que nuestros programas son uns serie de **sentencias** que se ejecutan una tras otra. Sin embargo solo esto, sería una forma muy limitada de organizar el código. Po eso surgen los **bloques**, limitados mediante llaves ({}) y la posibilidad de utilizarlos en al menos tres estructuras de control del flujo se la aplicación.

- las **funciones**: bloque de código que pueden tener un nombre y ser ejecutados cada vez que se invocan.
- las **iteraciones**, que permiten repetir un bloque un número determinado de veces
- las **condiciones**, que permiten decidir si un bloque se ejecuta o no en función del valor devuelto por una expresión.

---

🥷 En JS original sólo lo hacían las funciones, pero en ES6+, cualquier bloque de código delimita un **ámbito (scope) de memoria**. Las variables declaradas con let y const existen solo en ese ámbito y nunca pueden ser accedidas desde otros ámbitos por encima de aquel en el que se han declarado.

---

🎯 Las **funciones** son sin duda las estructuras más importantes de JS y a ellas dedicaremos gran parte de nuestra formación, pero por ahora vamos a trabajar sin crear funciones

## Iteraciones (Bucles)

JS proporciona dos tipos de estructuras de iteración

- las que dependen de una condición indepenciente del número de ciclos, normalmente mediante `while` y `do ... while`
- las que se ejecutan un número determinado de veces, normalmente mediante diversas variaciones de `for`

### Números aleatorios

En JavaScript disponemos de un objeto Math que nos proporciona diversas constantes matemáticas (como Math.PI), junto con métodos de cálculo, como **Math.random()**, que nos interesa en este momento.

Este método genera un número aleatorio decimal (punto flotante) desde 0 hasta el valor inmediatamente anterior a 1.

Frecuentemente querremos un entero dentro de un **rango**, entre min y max, por ejemplo entre 0 y 10).

Para ello, sin min es 0, multiplicamos el valor aleatorio por max y lo redondeamos, usando de nuevo un método de Math, en este caso Math.round()

```js
const max = 2;
const randomNumber = Math.round(Math.random() * max);
console.log(randomNumber);
```

> 🛠️ Si ejecutas este código varias veces, veras como obtienes 0, 1 o 2.

Si el rango no empieza en 0, el código sera el siguiente.

```js
const min = 1;
const max = 2;
const randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);
```

### While

Permite hacer una iteración mientras se cumpla una condición, sin saber a priori cuantos resultados obtenemos.

Por ejemplo, queremos tirar un dada hasta que nos salga un 6

```js
const min = 1;
const max = 6;
let r = 0;
while (r < 6) {
  r = Math.round(Math.random() * (max - min) + min);
  console.log(r);
}
console.log('Fin de la serie');
```

En el inicio del bucle definimos la condición.
Si se cumple, se ejecuta el bloque.
Se evalúa de nuevo la condición.
Si se cumple, se ejecuta nuevamente el bloque.
Y así hasta que la condición no se cumpla.
Sólo entonces se continúa ejecutando el código posterior al bloque.

Aunque no sabemos el número de vueltas que se producirán, podemos incorporar un contador que nos indique en que iteración estamos. Será el código del bloque el responsable de mantenerlo actualizado

```js
const min = 1;
const max = 6;
let r = 0;
let i = 0;
while (r < 6) {
  r = Math.round(Math.random() * (max - min) + min);
  i++;
  console.log(`La tirada ${i} vale ${r}`);
}
console.log(`Fin de la serie de ${i} tiradas`);
```

---

🥷 Si la condición hace referencia al contador, y el bucle lo actualiza como en el ejemplo, podríamos emular en el while el comportamiento que luego veremos en el for

---

Existe una variación de esta estructura, el **do...while**, que evalúa la condición al final, en lugar de al principio, pero en nuestro ejemplo funcionaría exactamente igual.

```js
const min = 1;
const max = 6;
// Aunque r comienza en 6, el bucle funciona
// porque el valor de r se evalúa después de la primera ejecución del bloque
// por tanto con el primer número random
let r = 6;
let i = 0;
do {
  r = Math.round(Math.random() * (max - min) + min);
  i++;
  console.log(`La tirada ${i} vale ${r}`);
} while (r < 6);
console.log(`Fin de la serie de ${i} tiradas`);
```

### For

Permite hacer una iteración un determinado número de veces, que definimos a priori.

Por ejemplo, queremos tirar un dado 10 veces

```js
const min = 1
const max = 6;
for (let i = 0; i < 10, i++) {
    const r =  Math.round(Math.random()*(max-min) + min);
    console.log(r);
}
```

En la estructura del for incluimos 3 sentencias de ejecución (separadas por ;)

- la que declara una variable contador (generalmente llamada i, de índice) y le asigna el valor inicial, habitualmente 0 o 1
- la que establece la condición que debe cumplirse para que se ejecute la siguiente interacción, normalmente en función del valor del contador
- la que define como se modifica el contador en cada vuelta, normalmente incrementando en 1. la expresión i++ es una forma abreviada de i = i + 1

---

🥷 También puede haber iteraciones en sentido inverso, empezando en un valor y restando 1 en cada vuelta. Igualmente es posible, aunque no lo mas habitual incrementar o decrementar el contador en una cantidad distinta de 1.

---

Dentro del bloque del for podemos evaluar una condición mediante if, y disponemos de dos operaciones posibles

- `break`, permite abandonar el bucle y continuar con el código posterior al bloque
- `continue`, permite abandonar la iteración actual: el contador aumenta en 1 y el ciclo de iteraciones sigue su curso

### Iterables

Son las estructuras de datos que se pueden recorrer mediante un for, como es el caso de arrays y de strings.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
for (let i = 0; i < users.length; i++) {
  const item = users[i];
  console.log(`Hola, soy ${item}, el usuario número ${i + 1}`);
}
console.log('Esto es todo');
```

En cada vuelta o iteración tenemos dos elementos

- el indice i, que recoge la posición en la que estamos
- el iterador, que recoge el valor de la posición. Puede ser una variable, en nuestro ejemplo item, o simplemente la expresión que asignamos a esa variable, array[i].

🎯 Muchos de los problemas al recorrer un array vienen de confundir estos elementos.

> 🛠️ Observa que al indicar la posición en la consola empleamos i + 1: el mundo no entiende que empecemos a contar desde 0, así que hacemos las cuentas desde 1.

Como hemos visto los string también son iterables.

```js
const word = 'Elefante';
for (let i = 0; i < word.length; i++) {
  const item = word[i];
  console.log(`Hola, la letra ${i + 1} de ${word} es ${item}`);
}
console.log('Esto es todo');
```

En el caso de los arrays, en cada iteración podemos no solo mostrar el valor, sino también modificarlo.

Por ejemplo, queremos los cuadrados de los números de un array.

```js
const numbers = [12, 25, 31, 42, 52];
console.log(numbers); // [ 12, 25, 31, 42, 52 ]
for (let i = 0; i < numbers.length; i++) {
  let item = numbers[i];
  numbers[i] = item * item;
}
console.log(numbers); // [ 144, 625, 961, 1764, 2704 ]
```

En el caso de los strings, no es posible cambiar el valor de cada posición: son iterables de solo lectura.

## Condiciones

### If - else

La estructura **if** permite definir una condición asociada a un bloque, que se ejecutará solo si se cumple dicha condición. Se puede complementar con el **else** para indicar el bloque alternativo, que se ejecutará si no se cumple la condición.

En nuestro ejemplo vamos a distinguir pares e impares.
Para ello tenemos el operador de modulo o resto (%) que devuelve el resto de una división

- en los pares el resto es 0: n%2 = 0
- en los impares es 1: n%2 = 1

```js
const max = 100;
const num = Math.round(Math.random() * max);

if (num % 2 === 0) {
  console.log(`El número ${num} es par`);
} else {
  console.log(`El número ${num} es impar`);
}
```

Si se necesita evaluar mas posibilidades se pueden añadir todas las condiciones requeridas, mediante else if

```js
const user = { age: 10, name: `Pepe`, gender: 'male' };

if (user.age <= 10) {
  console.log('Los niños no pueden entrar');
} else if (user.age < 18) {
  console.log('Los menores deben ir acompañados');
} else if (user.gender === 'male') {
  console.log(`Bienvenido, ${user.name}`);
} else {
  console.log(`Bienvenida, ${user.name}`);
}
```

> 🛠️ Prueba este código cambiando los valores de las propiedades del objeto

### Switch - case

Una estructura similar a la anterior, para el caso en que todas los condiciones se refieran a la misma variable, es el **switch ... case**.

```js
const language = 'En';
let greeting;
switch (language) {
  case 'En':
    greeting = 'Hello my friend';
    break;
  case 'Es':
    greeting = 'Hola amigo';
    break;
  case 'Fr':
    greeting = 'Salut mon ami';
    break;
  case 'De':
    greeting = 'Hallo Freund';
    break;
  default:
    greeting = 'Hi';
    break;
}
console.log(greeting);
```

> 🛠️ Prueba este código cambiando los valores de la variable `language`

Observa que al final de cada caso hay un `break`. En caso contrario, al entrar en un caso se ejecuta dodo el resto del switch. esto puede ser util en otras circunstancias, pero no en nuestro ejemplo.
# Tipos de datos

- Tipos de datos del estándar de JS
  - El operador typeof
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Bigint
  - Symbol
  - Object
- Tipado de las variables
- Objetos
- Arrays
  - Métodos de arrays
  - Métodos mutables de arrays
  - Métodos no mutables de arrays
  - Ordenando arrays

## Tipos de datos del estándar de JS

🎯 En el actual estándar de JavaScript (ES2024) existe solamente **8 tipos** de datos diferentes. Siete de ellos se conocen como valores primitivos, frente al ultimo que son valores referenciados

- Valores primitivos
  - number
  - string
  - boolean
  - undefined
  - null
  - bigint
  - symbol
- Valores referenciados
  - object

### El operador typeof

🎯 El operador **typeof** devuelve el tipo de la expresión a la que precede, que como sabemos puede ser tanto un literal como una variable.

Utilizándolo puedes comprobar los distintos tipos existentes.n
Observa que por el momento estamos viendo el tipo de los datos, sin utilizar variables.

### Number

Incluye los números enteros y decimales (float point)
El operador de signo negativo permite definir números negativos.

```js
console.log(34, typeof 34); // number
console.log(-34, typeof -34); // number
console.log(3.4, typeof 3.4); // number
console.log(3_000_000.4, typeof 3_000_000.4); // number
```

> 🛠️ Como ves, si necesitas escribir números grandes puedes usar el guion bajo como separador de miles

---

🥷 En base a las características de la memoria del ordenador, el número más grande que se puede almacenar es del orden de 10 a la 308. Mas allá de ese valor, JS dispone de nos números especiales, **Infinity** y -**Infinity** con los que representa cualquier cantidad que supere el citado valor máximo

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(1e309, typeof 1e309); // Infinity number
```

---

### String

Incluye los strings en cualquiera de los formatos que ya hemos mencionado.

Recuerda que al usar UTF-8 (todos los sistemas operativos lo hacen) puedes mezclar símbolos de cualquiera de los alfabetos existentes, tanto actuales como desaparecidos. Incluso puedes añadir emoticons.

```js
console.log('pepe', typeof 'pepe'); // string
console.log('❤️', typeof '❤️'); // string
console.log(`pepe`, typeof `pepe`); // string
console.log('', typeof ''); // string
```

---

🥷 Existe un string especial, conocido como **cadena vacía**, que se obtiene sin dejar espacio entre las comillas, y se usa para indicar un string que carece de contenido. Al evaluarse a boolean, como luego veremos, es el único string que corresponde a false.

---

### Boolean

Representa la posibilidad de que algo tenga unicamente dos posibles estados, correspondientes en JS a los valores **true** y **false**

```js
console.log(true, typeof true); // boolean
console.log(false, typeof false); // boolean
```

### Undefined

Es el valor que reciben en JS las variables que se declaran pero a las que no se les asigna **ningún valor inicial**. Se representa mediante la palabra reservada `undefined`

```
console.log(undefined, typeof undefined); // undefined
```

### Null

Es similar a `undefined` pero se utiliza para dejar sin valor una variable de forma **intencionada**, asignándole `null` como resultado de algún proceso de nuestro código

🎯 Existe un **bug** desde los inicios de JS, que no ha podido ser resuelto por cuestiones de compatibilidad, que hace que typeof identifique erróneamente un valor `null` con el tipo **object**, en lugar de indicar el tipo **null**, que sería lo correcto,

```
console.log(null, typeof null); // Por error retorna object
```

### Bigint

Además del máximo valor numérico ya mencionado, lo importante es que al realizar operaciones matemáticas, JS pierde precisión a partir de un valor mucho menor, aunque de de más de 9 mill billones (del orden de 10 a la 15)

Para solucionar este problema, en ES6+ se ha creado el nuevo tipo **bigint**, aunque por ahora no vas a necesitar utilizarlo.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(9_007_199_254_740_991, typeof 9_007_199_254_740_991); // 9007199254740991 number
console.log(9_007_199_254_740_992n, typeof 9_007_199_254_740_992n); // 9007199254740992n bigint
```

### Symbol

El último tipo primitivo, añadido también en ES6+ es el Symbol, cuyos valores son únicos e immutables y pueden ser utilizados como identificadores (claves) de las propiedades de los objetos

No se utilizan demasiado, y desde luego, no es algo que necesites conocer por ahora.

```js
console.log(Symbol(), typeof Symbol()); // symbol
```

### Object

Junto a los 7 primitivos, JS incorpora un tipo especial, de carácter **referenciado**, que marca de forma definitiva la manera en que se utiliza este lenguaje. Son los **objetos**, en todas sus variedades, incluyendo principalmente Object, Array, RegExp, Date, Error y Function.

Todos ellos son **tipo object**, y así lo indica typeof, excepto en el caso de las funciones, que por sus especiales características devuelven como **tipo function**

```js
// Objetos literales
console.log({}, typeof {}); // {} object
// Arrays
console.log([], typeof []); // [] object
// Expresiones regulares (RgExp)
console.log(/a/, typeof /a/); // /a/ object
// Fechas (Date)
console.log(new Date(), typeof new Date()); // 2022-09-07T16:21:53.198Z object
// Errores
console.log(new Error('Error').message, typeof new Error()); // Error object
// Funciones
console.log(() => {}, typeof (() => {})); // [Function (anonymous)] function
```

## Tipado de las variables

Ahora que sabemos los tipos de datos posibles, ¿que pasa con las variables?.

Pues simplemente reciben el tipo del valor que se les asigna

---

🥷 JS es un lenguaje de **tipado débil y dinámico**.

- _débil_ porque las variables en si no tienen un tipo explícito: toman siempre el tipo del dato al que apuntan
- _dinámico_ porque el tipo de una variable puede cambiar (en el caso de let) cuando se les asigna un nuevo valor de un tipo diferente

---

El siguiente ejemplo demuestra lo que hemos dicho.

```js
let foo;
console.log(foo, typeof foo); // undefined undefined
foo = 34;
console.log(foo, typeof foo); // 34 number
foo = 'pepe';
console.log(foo, typeof foo); // pepe string
foo = true;
console.log(foo, typeof foo); // true boolean
foo = null;
console.log(foo, typeof foo); // null object (recuerda el bug: debería ser null)
foo = 10n;
console.log(foo, typeof foo); // 10n bigint
foo = Symbol();
console.log(foo, typeof foo); // Symbol() symbol
foo = {};
console.log(foo, typeof foo); // {} object
```

Como ves, una misma variable pasa por los ocho tipos disponibles, aunque sería muy mala practica trabajar así.

> 🛠️ En lugar de lo que ves en el ejemplo, ten en cuenta las siguientes reglas de estilo
>
> - las variables deben tener un **nombre** que defina su contenido con la mayor claridad posible. No importa que el nombre sea largo y compuesto de varias palabras que uniremos mediante camelCase: siEsNecesarioEstoValeComoNombre
> - en consecuencia es muy poco probable que le asignemos a una misma variable valores de distinto **tipo**
> - siempre que sea posible, cuando no sea necesario reasignar, usaremos **const** para declarar las variables
# Objetos

## Objetos literales

Los objetos son colecciones de datos relacionados junto con las funcionalidades necesarias para esos datos. Para ello se agrupan una serie de propiedades que puedes corresponder a cualquiera de los tipos que ya conocemos, incluyendo otros objetos. Cuando a una propiedad se le asigna una función se denomina método, y confiere al objeto las funcionalidades antes mencionadas.

Lo que diferencia a los objetos de cualquier otro tipo de dato es su **mutabilidad**: se pueden añadir, eliminar o modificar propiedades, es decir cambiar o mutar el objeto, sin necesidad de reasignarle un nuevo valor, por lo que no es un impedimento que haya sido declarado mediante const.

La forma más sencilla de crear un objeto se conoce como **objetos literales** y permite indicar entre llaves las propiedades del objeto con sus correspondientes valores después de dos puntos, separando mediante comas las sucesivas propiedades.

```js
// Declaramos una variable y le asignamos como valor un objeto
const person = {
  name: 'Pepe',
  age: 33,
};
console.log(person, typeof person); // { name: 'Pepe', age: 33 } object
```

El operador punto (.) permite acceder al conjunto de propiedades del objeto, para añadir, modificar o mostrar por consola cualquier propiedad,

```js
const person = {
  name: 'Pepe',
  age: 33,
};
// Añadimos nuevas propiedades
// En este caso con un valor de tipo objeto
person.address = { street: 'c/ Pez', number: 12, city: 'Madrid' };
// Modificamos el valor de una propiedad
person.age = 34;
// Mostramos por consola el objeto
// con los cambios anteriores
console.log(person); // {name: 'Pepe', age: 34,
// address: { street: 'c/ Pez', number: 12, city: 'Madrid' }}
// Accedemos a una sola propiedad del objeto
// y en este caso la mostramos por consola una sola
console.log(person.name); // Pepe
```

---

🥷 El operador delete permite eliminar completamente una propiedad, aunque no es una práctica muy habitual

```js
const pet = {
  specie: 'perro',
  name: 'Rufo',
  owner: 'Pepe',
};

console.log(pet); // { specie: 'perro', name: 'Rufo', owner: 'Pepe' }

// Decidimos que no debe existir la propiedad owner

delete pet.owner;
console.log(pet); // { specie: 'perro', name: 'Rufo' }
```

---

🎯 En estos ejemplos hemos podido ver como **mutamos** (cambiamos) el valor de los objetos declarados mediante const, porque en ningún momento estamos designándoles su valor: siguen siendo el mismo objeto con propiedades diferentes.

## Arrays

Un tipo particular de objetos que utilizaras en tus próximos ejercicios son los **arrays**. En este caso las propiedades no tienen nombre sino que se numeran sucesivamente desde O.

---

🥷 En JS es importante tener en cuenta que, en definitiva son **objetos**, con la misma flexibilidad que los demás objetos. Su número de elementos puede aumentar o disminuir en cualquier momento, al contrario de lo que sucede con los arrays estrictos habituales en muchos lenguajes de programación.

---

La creación de los arrays es similar a la de los objetos, pero en este caso utilizando los **corchetes** ([]). La variable correspondiente se declara con const y recibe un nombre que indique su carácter de lista de múltiples elementos, mediante un plural (users) o una referencia a diversos incontables (people).

Los elementos o **items** del array pueden ser de cualquier tipo, y de diferentes tipos unos y otros, aunque igual que decíamos respecto a los cambios de tipos en las variables, sería una buena práctica mantener siempre un **único tipo** invariable en todos los elementos de un array

```js
// Declaramos mediante const una variable
// y le asignamos un array de strings
const users = ['Pepe', 'Luisa'];
console.log(users, typeof users); // [ 'Pepe', 'Luisa' ] object
```

Mediante los corchetes también podemos acceder a cualquier posición de un array, indicando su índice, para modificar su valor o utilizarlo, por ejemplo mostrándolo en la consola.

Como objetos que son, el operador . permite acceder a sus propiedades, en este caso comunes a todos los arrays, que proporcionar una serie de métodos junto con la propiedad length, correspondiente a la longitud del array.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
// La propiedad length indica siempre la longitud del array
console.log(users.length); // 4
// Podemos acceder a un item indicando su índice o posición
console.log(users[0]); // Pepe
// Accediendo a un item por su índice, podemos modificar su valor
users[0] = 'Jose';
console.log(users[0]); // Jose
// A partir de la longitud del array
// Podemos añadir nuevos elementos
// que tendrán como indice el siguiente al último
users[users.length] = 'Sofia';
console.log(users); // [ 'Jose', 'Luisa', 'Elena', 'Ernesto', 'Sofia' ]
console.log(users.length); // 5
```

Como has visto, al conocer la longitud de un array, es fácil añadir un nuevo elemento en la posición siguiente a la última. También podemos hacer eso mismo con alguno de los muchos metodos de los que disponen todos los arrays.

### Métodos de arrays

Como ya sabemos, un array es un objeto, y por tanto el **operador punto** permite acceder a todos los **métodos** que incorpora.

Haz la prueba en Code Interview. Declara un array y escribe un punto a continuación de su nombre. Veras la lista de todos los métodos de los que dispone un array.

---

🥷
Podemos clasificar estos métodos en dos tipos

- métodos mutables: modifican el array que los invoca y en algunos casos no devuelven ningún valor
- métodos inmutables: no modifican el array que los invoca, sino que devuelven un valor, por lo general un nuevo array o un boolean.

---

De momento es suficiente con que entiendas alguno de los primeros.

### Métodos mutables de arrays

Los dos primeros métodos modifican el **final** del array

- array.push(value): **Agrega** uno o más elementos al final de un array y devuelve la nueva longitud del array.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
const newLength = users.push('Sofia');
console.log(users); // [ 'Jose', 'Luisa', 'Elena', 'Ernesto', 'Sofia' ]
console.log(newLength); // 5
```

- array.pop(): **Elimina** el último elemento de un array y lo devuelve.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
const deletedUser = users.pop();
console.log(users); // [ 'Pepe', 'Luisa', 'Elena' ]
console.log(deletedUser); // Ernesto
```

Tenemos también otros dos que modifican el **principio** del array

- array.unshift(value): **Agrega** uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
const newLength = users.unshift('Sofia');
console.log(users); // [ 'Sofia', 'Pepe', 'Luisa', 'Elena', 'Ernesto' ]
console.log(newLength); // 5
```

- array.shift(): **Elimina** el último elemento de un array y lo devuelve.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
const deletedUser = users.shift();
console.log(users); // [ 'Luisa', 'Elena', 'Ernesto' ]
console.log(deletedUser); // Pepe
```

Finalmente podemos modificar unicamente el order de nuestro array

- array.sort(): ordena el array de lo invoca. Si no recibe parámetros, el orden será el alfabético ascendiente. Para otras ordenaciones, el parámetro será una función responsable de establecer el orden.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
users.sort();
console.log(users); // [ 'Elena', 'Ernesto', 'Luisa', 'Pepe' ]
```

### Métodos no mutables de arrays

En este apartado hay métodos muy potentes aunque algo complejos, que estudiaras más adelante (forEach, map, filter, reduce, find, some, every).

También hay algunos muy sencillos de entender y utilizar. Como ves, al final mostramos por consola el array y puedes comprobar que no ha sido modificado.

- array.includes(): Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
let isIncluded = users.includes('Elena');
console.log(isIncluded); // true
isIncluded = users.includes('Sofia');
console.log(isIncluded); // false
console.log(users); // [ 'Pepe', 'Luisa', 'Elena', 'Ernesto' ]
```

- array.join(): devuelve una cadena en la que une todos los elementos del array. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos, aunque por defecto utilizará una coma (sin espacios).

```js
const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
const listUsers = users.join(', ');
console.log(listUsers); // Pepe, Luisa, Elena, Ernesto
console.log(users); // [ 'Pepe', 'Luisa', 'Elena', 'Ernesto' ]
```

### Arrays multi dimensionales. Bucles anidados

Cuando los elementos de un array son arrays, tenemos un array de dos **dimensiones**. Si sucede lo mismo en el array interior sucesivamente, podemos tener n dimensiones. En algunas ocasiones encontraras el nombre de matrices para referirse a estas estructuras pero en JS no son otra cosa que arrays.

Para recorrer estos arrays necesitamos anidar un bucle for por cada dimensión

Veamos un ejemplo con dos dimensiones.

```js
const matrix = [
  [1, 2, 3],
  [10, 20, 30],
  [100, 200, 300],
];
for (let i = 0; i < matrix.length; i++) {
  const line = matrix[i];
  for (let j = 0; j < line.length; j++) {
    const item = line[j];
    console.log(`En la línea ${i + 1}, el valor ${j + 1} es  ${item} `);
  }
}
```
