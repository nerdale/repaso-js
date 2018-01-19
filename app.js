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
var suma = [1, 2, 3, 4, 5];
var nuevaSuma = suma.reduce(function(valorAnterior, valorActual) {
  return valorAnterior + valorActual;
})
// ES6
const suma = [1, 2, 3, 4, 5];
const nuevaSuma = suma.reduce((valorAnterior, valorActual) => valorAnterior + valorActual);

/*
* For
* ES5
*/
var numeritos = [1, 2, 3, 4, 5];
for (var i = 0; i < numeritos.length; i++) {
  console.log(numeritos[i]);
}
/*
* ForEach
* ES5
*/
var recorrido = numeritos.forEach(function(e) {
  console.log(e + 2);
})

// ES6
const numeritos = [1, 2, 3, 4, 5];
const recorrido = numeritos.forEach(e => console.log(e + 2));

// Objetos Literales
var friendBelen = {
  name: 'Belén',
  age: '20',
  hobbies: [],
  pastime: function(a) {
    this.hobbies.push('javascript', 'bullying', 'joke');
  }
}
// belen.pastime();

/*
* Objeto Constructor
* ES5
*/
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