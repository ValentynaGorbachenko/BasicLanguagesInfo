/*
	JavaScript (ECMAScript) (JS) is a lightweight, interpreted, programming language 
	with first-class functions. While it is most well-known as the scripting 
	language for Web pages, many non-browser environments also use it, such as 
	node.js and Apache CouchDB. JS is a prototype-based, multi-paradigm, 
	dynamic scripting language, supporting object-oriented, imperative, 
	and declarative (e.g. functional programming) styles.
*/
"use strict";
/****** Comments ******/

// Inline comments done by using double slash 

/* 
	MultiLine comments done by using 
	a pair of openning slash plus star 
	proceeded by comments block and 
	closing star plus slash
*/

/****** Data Types ******/
/*
	Six data types that are primitives:
		* Boolean
		* Null
		* Undefined 
		* Number
		* String
		* Symbol (new in ECMAScript 6)
	and 
		* Object
	
*/

/****** Values of Data Types ******/
	true && false // Boolean type 
	null // Null type
	undefined // Undefined type
	NaN || 123 || 3.14 || +Infinity || -Infinity ||  Number.MAX_VALUE || Number.MIN_VALUE // Number type +-2 in 53
	"String" || "" // String type
	Symbol(); // Symbol type
	let y = {a:"abc"} ||  new Object() || [] || new Array() // Object type

	typeof "John";             // Returns "string" 
	typeof 3.14                // Returns "number"
	typeof true                // Returns "boolean"
	typeof false               // Returns "boolean"

	typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
	typeof {name:'John', age:34} // Returns "object"
	typeof function myFunc(){}   // Returns "function"

	typeof undefined           	// undefined
	typeof null                	// object
	null === undefined         	// false
	null == undefined 			// true

/****** Enumerability and ownership of properties ******/
// Detection - hasOwnProperty
let obj = new Object();
obj.prop = "exist";
obj.hasOwnProperty("prop");

// Iteratable for... in loop, in
for (let name in obj){
	if(obj.hasOwnProperty(name)){
		console.log("obj[name]",obj[name]);
	} else{
		console.log(name);
	}
}

console.log('prop' in obj);
// delete obj.prop
// console.log('prop' in obj);

// Retrieval - Object.keys(obj), Object.getOwnPropertyNames(obj)
console.log(1, Object.keys(obj));

console.log(2, Object.getOwnPropertyNames(obj));

/****** Semantics ******/
/*
	do Statement while(Expression);
	while (Expression) Statement
	for( Expressionopt;Expressionopt;Expressionopt)Statement
	for (var VariableDeclarationList; Expressionopt; Expressionopt) Statement
	for (LexicalDeclaration Expressionopt; Expressionopt)Statement
	for (LeftHandSideExpression in Expression)Statement
	for (varForBinding in Expression)Statement
	for (ForDeclaration in Expression)Statement
	for (LeftHandSideExpression of AssignmentExpression)Statement
	for (var ForBinding of AssignmentExpression)Statement
	for (ForDeclaration of AssignmentExpression)Statement
*/

/****** Decision Making ******/

/* 
	if (condition)
	   statement1
	[else
	   statement2]

	if (condition1)
	   statement1
	else if (condition2)
	   statement2
	else if (condition3)
	   statement3
	...
	else
	   statementN


	switch (expression) {
	  case value1:
	    //Statements executed when the result of expression matches value1
	    [break;]
	  case value2:
	    //Statements executed when the result of expression matches value2
	    [break;]
	  ...
	  case valueN:
	    //Statements executed when the result of expression matches valueN
	    [break;]
	  default:
	    //Statements executed when none of the values match the value of the expression
	    [break;]
	}
*/

/****** Definite Loop ******/
/*
	for ([initialization]; [condition]; [final-expression])
	   statement 

	for (variable-key in object) { ...
	}

	for (variable-value of iterable) {
	  statement
	}
*/

/****** Indefinite Loop ******/
/*
	while (condition)
	  statement

	do
	   statement
	while (condition);
*/

/****** Loop Control Statements ******/
/*
	break [label];

	continue [label];
*/