// Este es un comentario de una línea

/*
    Este es
    un comentario
    de múltiples líneas
*/


//Declaraciones (var, let y const)
var x = 1; // var es accesible a nivel de función
let y = 2; // let y const son accesibles a nivel de bloque
const z = 3; // const es una constante que no puede ser reasignada


//Tipos de Datos (Boolean, Null, Undefined, Number, String, Symbol y Object)
let boo = true; // Boolean
let nul = null; // Null
let unde = undefined; // Undefined
let num = 42; // Number
let str = 'Hola'; // String
let sym = Symbol('id'); // Symbol
let obj = { a: 1 }; // Object
// Conversión de tipos
let num2 = Number('3.14'); // 3.14
let str2 = String(42); // '42'
let bool2 = Boolean(0); // false


//Literales (Array, Boolean, Integer, Flotantes, Object, RegExp, String, Symbol)
let arr = [1, 2, 3]; // Array
let object = { a: 1, b: 2 }; // Objeto
let boolean = true; // Boolean
let int = 42; // Entero
let float = 3.14; // Flotante
let reg = /pattern/; // RegExp
let string = 'Hola'; // String


//Sentencias Condicionales (if, else, switch)
//If
let x = 2;
if (x > 0) {
    console.log('Positivo');
} else if (x < 0) { //else
    console.log('Negativo');
} else {
    console.log('Cero');
}
//Switch
switch (x) {
    case 1:
        console.log('Uno');
        break;
    case 2:
        console.log('Dos');
        break;
    default:
        console.log('Otro');
}


//Sentencias de Captura de Errores (throw, try - catch).
try {
    // Código que puede lanzar un error
    throw new Error('Error ocurrido');
} catch (error) {
    console.log(error.message); // 'Error ocurrido'
}


//Ciclos e Iteraciones (for, while, do..while, labels para ciclos, break, continue, for..in, for..of)
// for
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// while
let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}
// do...while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 3);
// for...in (objetos)
let ob = { a: 1, b: 2, c: 3 };
for (let prop in ob) {
    console.log(prop, ob[prop]);
}
// for...of (iterables)
let arra = [1, 2, 3];
for (let value of arra) {
    console.log(value);
}


//Funciones (Como expresiones, llamadas, alcance de variables, Recursividad, Alcance de Variables, Closures, Argumentos, Parametros, Funciones Flecha, Funciones Predefinidas). 
// Expresión de función
let suma = function(a, b) {
    return a + b;
}
console.log(suma(1, 2)); // 3
// Función flecha
let mult = (a, b) => a * b;
console.log(mult(2, 3)); // 6
// Recursividad
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
// Closures
function outer() {
    let count = 0;
    return function inner() {
        return ++count;
    }
}
let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2


//Operadores (Asignacion y Asignacion destructurada, Comparacion, Aritmeticos, Logicos, String, Ternario, Delete, typeof, void, in, instanceOf, presendencia de operadores, this, super, operador de propagacion).
let x = 5; // Asignación
let aa, bb;
[aa, bb] = [1, 2]; // Asignación Destructurada de Array
console.log(a, b); // 1 2
let objj = { c: 3, d: 4 };
({ c, d } = objj); // Asignación Destructurada de Objeto
console.log(c, d); // 3 4
// Comparación
console.log(5 == '5'); // true (compara valor)
console.log(5 === '5'); // false (compara valor y tipo)
console.log(5 != '5'); // false
console.log(5 !== '5'); // true
console.log(5 > 3); // true
console.log(5 >= 5); // true
// Aritméticos
console.log(5 + 3); // 8
console.log(5 - 3); // 2
console.log(5 * 3); // 15
console.log(5 / 3); // 1.6666666666666667
console.log(5 % 3); // 2 (módulo)
console.log(5 ** 3); // 125 (exponenciación)
// Lógicos
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
//String
console.log('Hola' + ' ' + 'Mundo'); // 'Hola Mundo'
// Ternario
let edad = 18;
let mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
console.log(mensaje); // 'Mayor de edad'
//Delete
let obbj = { a: 1, b: 2 };
delete obbj.a; // Elimina la propiedad 'a'
console.log(obbj); // { b: 2 }
//typeof
console.log(typeof 5); // 'number'
console.log(typeof 'Hola'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' (un bug histórico)
console.log(typeof {}); // 'object'
//Void
console.log(void 0); // undefined
//In
let oobbj = { a: 1, b: 2 };
console.log('a' in oobbj); // true
console.log('c' in oobbj); // false
//InstanceOf
let date = new Date();
console.log(date instanceof Date); // true
console.log(date instanceof Array); // false
//Presendencia de operadores
let x = 5 + 3 * 2; // 5 + 6 = 11
let yx = (5 + 3) * 2; // 8 * 2 = 16
//this
let oobj = {
    a: 1,
    b: function() {
      console.log(this.a); // 1 (this se refiere al objeto)
    }
};
oobj.b();
//super
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} hace un sonido.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // Llama al constructor de la clase padre
    }
    speak() {
        super.speak(); // Llama al método de la clase padre
        console.log(`${this.name} ladra.`);
    }
}
let dog = new Dog('Buddy');
dog.speak(); // 'Buddy hace un sonido. Buddy ladra.'
//Operador de propagación
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4]
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }


//Colecciones (Array, Metodos Array, Matrices, Maps, Sets).
// Arrays
let arrayII = [1, 2, 3];
console.log(arrayII.length); // 3
console.log(arrayII.push(4)); // [1, 2, 3, 4]
// Maps
let map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // 'value'
// Sets
let set = new Set([1, 2, 3, 2]);
console.log(set); // Set(3) { 1, 2, 3 }


//Objetos (Declaracion, Propiedades, Funciones de Listado, Constructores, Create, Metodos, Herencia, getters y setters, Comparacion de Objetos).
//Declaracion
// Objeto literal
let persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
// Objeto a partir de una función constructora
function Persona(nombre, edad) {
this.nombre = nombre;
this.edad = edad;
}
let persona2 = new Persona('María', 25);
//Propiedades
console.log(persona.nombre); // 'Juan'
persona.saludar(); // 'Hola, soy Juan'
console.log(persona2.nombre); // 'María'
//Funciones de Listado
// Listado de propiedades
for (let prop in persona) {
    console.log(prop, persona[prop]);
}
// Listado de propiedades y métodos
console.log(Object.keys(persona)); // ['nombre', 'edad', 'saludar']
console.log(Object.values(persona)); // ['Juan', 30, function() {...}]
console.log(Object.entries(persona)); // [['nombre', 'Juan'], ['edad', 30], ['saludar', function() {...}]]
//Constructores y Create
function Persona(nombre, edad) {
    // this = Object.create(Persona.prototype);
    this.nombre = nombre;
    this.edad = edad;
    // return this;
}
let persona3 = Object.create(Persona.prototype);
persona3.nombre = 'Pedro';
persona3.edad = 35;
//Herencia
function Empleado(nombre, edad, puesto) {
    Persona.call(this, nombre, edad);
    this.puesto = puesto;
}
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;
Empleado.prototype.presentarse = function() {
    console.log(`Hola, soy ${this.nombre}, un ${this.puesto} de ${this.edad} años.`);
}
let empleado = new Empleado('Ana', 28, 'Ingeniera');
empleado.presentarse(); // 'Hola, soy Ana, un Ingeniera de 28 años.'
//getters y setters
let personas = {
    _nombre: 'Juan',
    get nombre() {
        return this._nombre;
    },
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
};
console.log(personas.nombre); // 'Juan'
persona.nombre = 'Pedro';
console.log(personas.nombre); // 'Pedro'
//Comparacion de Objetos
let obj11 = { a: 1, b: 2 };
let obj22 = { a: 1, b: 2 };
let obj33 = obj11;
console.log(obj11 === obj22); // false (diferentes referencias)
console.log(obj11 === obj33); // true (misma referencia)
// Comparar propiedades
function compararObjetos(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(compararObjetos(obj1, obj2)); // true
