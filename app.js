'use strict'
/*
* Map
* ES5
*/
var names = ['PAULA', 'MARCIA', 'CAMILA', 'SABRINA'];
var namesLower = names.map(function(element) {
  return element.toLowerCase();
})
// ES6
const names = ['PAULA', 'MARCIA', 'CAMILA', 'SABRINA'];
const namesLower = names.map(element => element.toLowerCase());

/*
* const namesLower = arr => arr.map(element => element.toLowerCase());
* namesLower(['PAULA', 'MARCIA', 'CAMILA', 'SABRINA']);
*/

/*
* Filter
* ES5
*/
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = numbers.filter(function(index) {
  return index % 2 === 0;
})
// ES6
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(index => index % 2 === 0);

/*
* Reduce
* ES5
*/
var add = [1, 2, 3, 4, 5];
var newAdd = add.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
})

// ES6
const add = [1, 2, 3, 4, 5];
const newAdd = add.reduce((previousValue, currentValue) => previousValue + currentValue);

const arr = ['Este', 'es', 'un', 'ejemplo', 'de', 'array', 'a' , 'string'];
const phrase = arr.reduce((previousValue, currentValue) => previousValue + ' ' + currentValue);

/*
* For
* ES5
*/
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + 2);
}
/*
* ForEach
* ES5
*/
var numbers = [1, 2, 3, 4, 5];
var result = numbers.forEach(function(e) {
  console.log(e + 2);
})
// ES6
const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach(e => console.log(e + 2));

/*
* Objetos ES5
*/

// Objeto Literal
var friendBelen = {
  name: 'Belén',
  age: '20',
  hobbies: [],
  pastime: function() {
    this.hobbies.push('javascript', 'bullying', 'joke');
  }
}
// belen.pastime();

// Objeto Constructor
function Friend(n, a) {
  this.name = n;
  this.age = a;
  this.hobbies = [];
  this.pastime = function(){
    this.hobbies.push('javascript', 'bullying', 'joke');
  }
}

// var belen = new Friend('Belén', '20');
// belen.pastime();

/*
* Objeto Constructor
* ES6
*/
class Friend {
  constructor (n, a) {
    this.name = n;
    this.age = a;
    this.hobbies = [];
  }
  pastime() {
    this.hobbies.push('javascript', 'bullying', 'joke');
  }
}

// let marcia = new Friend('Marcia', '15');
// let belen = new Friend('Belén', '20');
// let allison = new Friend('Allison', '21');

/*
* Comparación funciones ES5 versus ES6
* Extra no visto en clases
*/

// ES5 Función sin parámetros
function hello() {
  return 'Holi';
}
// ES6 Función sin parámetros
const hello = () => 'Holi';

// ES5 Función con un parámetro y condiciones
function selection(option) {
  if (option === 'cat') {
    return 'miau';
  } else if (option === 'dog') {
    return 'guau';
  } else {
    return 'f*ck';
  }
}
// ES6 Función con un parámetro y condiciones
const selection = (option) => {
  if (option === 'cat') {
    return 'miau';
  } else if (option === 'dog') {
    return 'guau';
  } else {
    return 'f*ck';
  }
}
// ES6 Función con un parámetro y operador ternario
const selection = (option) => option === 'cat' ? 'miau' : 'guau';

// ES5 Función con dos parámetros
function add (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// ES6 Función con dos parámetros
const add = (firstNumber, secondNumber) => firstNumber + secondNumber;