"use strict";
/*
1.  Create a class
2.  Create an instance of a class
3.  Create a private/class variables (have no access from the instance)
4.  Crate an public/instance variable (have access from the instance)
5.  Create private function (can be accessed from the class only )
6.  Create public function (can be accessed from the instance)
7.  Modify/add/delete functions/variables of the class
8.  Inheritance
*/
function ParentClass() {
	// code goes here
}

ParentClass.prototype.inheritedMethod = function() {
	console.log("from ParentClass function inheritedMethod");
};

function ChildClass() {
	var privateVar = "I am private"; // private var
  	this.prop = 5; // public
  	this.method = function() { // public
  		this.prop +=1; // modification of public var
  		privateVar += "!";
  		console.log("from ChildClass function method");
  	};
  	this.getPrivateVar = () => {return privateVar}; // have to say return to make it work
}

ChildClass.prototype = new ParentClass; // super.. inheritance 

ChildClass.prototype.prototypeMethod = function() {
	console.log("from ChildClass function prototypeMethod");
};

console.log(
  	Object.getOwnPropertyNames(
    	new ChildClass() // ["prop", "method"]
  	)
);

let chld = new ChildClass();
chld.inheritedMethod();
chld.prototypeMethod();
chld.method();
console.log(chld.prop); // 6
console.log(chld.privateVar); // undefined
console.log(chld.getPrivateVar()); //
let prnt = new ParentClass();
prnt.inheritedMethod();

// prnt.prototypeMethod(); // TypeError: prnt.prototypeMethod is not a function
// prnt.method(); // TypeError: prnt.method is not a function

/*****************************/
// constructor([arguments]) { ... }

// constructor() {}

// constructor(...args) {
//   super(...args);
// }

// super([arguments]); // calls the parent constructor.
// super.functionOnParent([arguments]);

// class Name [extends] {
//   // class body
// }
class Polygon { // class defenition 
  	constructor(height, width) {
	    this.name = 'Polygon';
	    this.height = height;
	    this.width = width;
  	}
  	sayName() {
    	console.log('Hi, I am a ', this.name + '.');
  	}
}

var MyPolygon = Polygon; // class expression 

console.log(Polygon.name); // Polygon
console.log(MyPolygon.name); // Polygon

class Square extends Polygon {
  	constructor(length) {
  		// this.height; // ReferenceError, super needs to be called first!
	    super(length, length);
	    this.name = 'Square';
  	}
  	get area() {
    	return this.height * this.width;
  	}

  	set area(value) {
    	this.height = this.width = Math.sqrt(value);
  	} 
}
console.log(Square.name);

class Human {
  	constructor() {}
  	static ping() { // class methods
    	return 'ping';
  	}
}

class Computer extends Human {
  	constructor() {}
  	static pingpong() { // class methods
    	return super.ping() + ' pong';
  	}
}
console.log(Computer.pingpong()); // 'ping pong'

class Base {
  	constructor() {}
  	foo() {}
}
class Derived extends Base {
  	constructor() {}
  	delete() {
    	delete super.foo;
  	}
}

//new Derived().delete(); // ReferenceError: invalid delete involving 'super'.

// var MyClass = class [className] [extends] {
//   // class body
// };

var Foo = class {}; // constructor property is optional
var Foo = class {}; // Re-declaration is allowed

typeof Foo; //returns "function"
typeof class {}; //returns "function"

console.log(Foo instanceof Object); // true
console.log(Foo instanceof Function); // true
// class Foo {}; // Throws TypeError, doesn't allow re-declaration

var Boo = class Boo {
  constructor() {}
  bar() {
    return 'Hello World!';
  }
};

var instance = new Boo();
console.log(instance.bar()); // "Hello World!"
console.log(Boo.name); // "Boo"

var Coo = class NamedCoo {
  constructor() {}
  whoIsThere() {
    return NamedCoo.name;
  }
}
var bar = new Coo();
console.log(bar.whoIsThere()); // "NamedCoo"
// NamedCoo.name; // ReferenceError: NamedFoo is not defined
console.log(Coo.name); // "NamedCoo"