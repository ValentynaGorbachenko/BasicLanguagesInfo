/*
1.  Create new data structure
2.  Get the size of the data structure
3.  Find/access/read an elenemt at the position
4.  Find/access/read the element with a value
5.  Modify/reassign the element at the position in the data structure 
6.  Modify/reassign the element with a value in the data structure 
7.  Add/Delete an elenemt to the end of the data structure
8.  Add/Delete an elenemt to the beginning of the data structure
9.  Insert/s the element at a position of the data structure
10. Cut element/s from and to position 
11. Loop through the data structure
*/
"use strict";

/********** OBJECTS ************/

/* Create new data structure */
let obj1 = {};
let obj2 = {key1: "value", key2: "value"};
let obj3 = new Object();
console.log(obj1, obj2, obj3);
console.log(typeof obj1, typeof obj2, typeof obj3);
console.log(obj1 instanceof Object);
console.log([] instanceof Array);

/* Get the size of the data structure */
console.log("Object.keys(obj2).map(key=>obj2.hasOwnProperty(key)).length");
console.log(Object.keys(obj2).map(key=>obj2.hasOwnProperty(key)).length);


/* Find/access/read an elenemt at the position */
obj2.new_prop = 123;
console.log('obj2.new_prop = 123;');
console.log('Object.keys(obj2).map(key=>obj2.hasOwnProperty(key)).length');
console.log('Length of the obj2 is ');
console.log(Object.keys(obj2).map(key=>obj2.hasOwnProperty(key)).length);
for (let key in obj2){
	console.log(obj2.hasOwnProperty(key), key, obj2[key]);
}

/* Find/access/read the element with a value */
console.log("Find/access/read the element with a value");
// console.log(Object.values(obj2).includes(123)); // true
// console.log(Object.values(obj2).indexOf(123)); // 2
console.log('console.log( "key1" in obj2);');
console.log( "key1" in obj2); // true
console.log('console.log(Object.values(obj2).includes(123)); // true');
console.log('console.log(Object.values(obj2).indexOf(123)); // 2');



/* Modify/reassign the element at the position in the data structure  */
obj2.new_prop = 456;
console.log(obj2["new_prop"]);
console.log(obj2.new_prop);

/* Modify/reassign the element with a value in the data structure  */


/* Add/Delete an elenemt to the end of the data structure */
// add 
console.log("Add/Delete an elenemt of the data structure")
obj2.second_new_prop = "second new property";
console.log('obj2.second_new_prop = "second new property";');
console.log(obj2.second_new_prop);
console.log('delete obj2.second_new_prop;');
delete obj2.second_new_prop;
console.log('console.log(obj2.second_new_prop);');
console.log(obj2.second_new_prop);
var obj4 = new Object({});
console.log(obj4);

/* Add/Delete an elenemt to the beginning of the data structure */

/* Insert/s the element at a position of the data structure */

/* Cut element/s from and to position  */

/* Loop through the data structure */
console.log('Loop through the data structure');
console.log('for (let key in obj2){\n	console.log(key, obj2[key]);\n}');
for (let key in obj2){
	console.log(key, obj2[key]);
}
