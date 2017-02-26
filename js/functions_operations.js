/*
1.  Create a function
2.  Modify a function
3.  Call the function
4.  Errow functions
*/
"use strict";
/****** Create a function ******/
function myFunction(param1, param2){
	console.log(param1 + param2);
}

/****** Call the function ******/
myFunction("Say1, ", "Hello1!");

/****** Modify/reassign a function ******/
function myFunction(param1, param2, param3){
	console.log("Hello from modified function");
	console.log(param1, param2, param3);
	console.log([param1, param2, param3]);
	return [param1, param2, param3];
}

/****** Call the function ******/
myFunction("Say2, ", "Hello2!");

/****** Errow functions ******/
// (param1, param2, …, paramN) => { statements };
// (param1, param2, …, paramN) => expression;
// equivalent to: (param1, param2, …, paramN) => { return expression; };

// Parentheses are optional when there's only one parameter:
(singleParam) => { statements };
singleParam => { statements };

// A function with no parameters requires parentheses:
() => { statements };
() => expression; // equivalent to: () => { return expression; }

// Parenthesize the body to return an object literal expression:
params => ({foo: bar});

// Rest parameters and default parameters are supported
// (param1, param2, ...rest) => { statements };
// (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements };

// Destructuring within the parameter list is also supported
// var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
// f();  // 6

function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}
var obj1 = {
  foo: function() {
    /* code */
  },
  bar: function() {
    /* code */
  }
};
var obj2 = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  }
};
var p = new Person();

// setInterval(()=> {console.log(p.age);}, 2000);
setTimeout(()=>console.log(p.age), 6000);

function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments,1);
  return args.join(separator);
}
// returns "red, orange, blue"
console.log(myConcat(', ', 'red', 'orange', 'blue'));

// returns "elephant; giraffe; lion; cheetah"
console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah'));

// returns "sage. basil. oregano. pepper. parsley"
console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'));

// function fun1(...theArgs) {
//  	console.log(theArgs.length);
// }

// fun1();  // 0
// fun1(5); // 1
// fun1(5, 6, 7); // 3

// function multiply(multiplier, ...theArgs) {
// 	return theArgs.map(function(element) {
// 		return multiplier * element;
//   });
// }
function multiply(multiplier, theArgs) {
	return theArgs.map(element => multiplier * element);
}

var arr = multiply(2, [1, 2, 3]); 
console.log(arr); // [2, 4, 6]

var Foo = () => {};
class Foo2{

}
console.log(typeof Foo);
console.log(typeof Foo2);
console.log(typeof new Foo2());
console.log(Foo2.prototype);

// An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')(); // IIFE, returns "foobar" 

var simple = a => a > 15 ? 15 : a; 
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
// promise.then(a => {
//   // ...
// }).then(b => {
//    // ...
// });

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);