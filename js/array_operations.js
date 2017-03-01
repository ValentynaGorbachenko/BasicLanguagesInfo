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
/********** ARRAY ************/
// Create an empty array - [], new Array(), Array.of(...elem)
console.log("Create an empty array");
var arr1 = []; // []
var arr2 = new Array(); // []
// Create an array with values
var arr3 = [1, {}, "string", [3, 6, 9]]; // [ 1, {}, 'string', [ 3, 6, 9 ] ]
var arr4 = new Array(5); // array with 5 undefined elements [ , , , ,  ] 
var arr5 = new Array(1,2,3,4); // [ 1, 2, 3, 4 ]
var arr6 = Array.of(7);       // [7] 
var arr7 = Array.of(1, 2, 3); // [1, 2, 3]
console.log(arr1, arr2, arr3, arr4, arr5, arr6, arr7);

console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('foobar'));   // false
console.log(Array.isArray(undefined));  // false

// Get the size of an array - arr.length
console.log("\nGet the size of an array");
console.log(arr1.length, arr2.length, arr3.length, arr4.length, arr5.length);
console.log("typeof new Array() - ",typeof new Array());


// Find/access/read an elenemt at the position - arr[index]
console.log("\nFind/access/read an elenemt at the position")
console.log(arr1[10]); // undefined
console.log(arr1[0]); // undefined
console.log(arr2[2]); // undefined

for (let value of arr3){ // for ... of - for arrays, maps, sets 
	console.log(value);
}

// Find/access/read the element with a value - arr.indexOf(value) => index or -1
console.log("\nFind/access/read the element with a value");
/*
arr.includes(searchElement)
arr.includes(searchElement, fromIndex)
*/
// console.log([ , , , ,  ].includes(undefined)); // true
// console.log([ 1, 2, 3, 4 ].includes(3)); // true
// console.log([ 1, 2, 3, 4 ].includes(3, 10)); // false

/*
arr.indexOf(searchElement)
arr.indexOf(searchElement, fromIndex)
*/
console.log(new Array(5).indexOf(undefined)); // -1
console.log([ 1, 2, 3, 4 ].indexOf(3)); // 2
console.log([ 1, 2, 3, 4 ].indexOf(3, 4)); // -1


// Modify/reassign the element at the position in the data structure - arr[index] = new_value
console.log("\nModify/reassign the element at the position")
console.log(arr5);
// arr5 => [ 1, 2, 3, 4 ]
arr5[0] = 100;
arr5[10] = 200;
console.log("arr5[0] = 100; \narr5[10] = 200;");
console.log(arr5);

// Modify/reassign the element with a value


// Add/Delete an elenemt to the end of the array - push(elem)/pop()
console.log("\nAdd/Delete an elenemt to the end of the array");
arr5.push("new value", "second new value");
console.log('arr5.push("new value", "second new value"); =>');
console.log(arr5);
console.log('console.log(arr5.pop()) =>');
console.log(arr5.pop());
console.log(arr5);

// Add/Delete an elenemt to the beginning of the array - unshift(elem)/ shift()
console.log("\nAdd/Delete an elenemt to the beginning of the array");
arr5.unshift("new value", "second new value");
console.log('arr5.unshift("new value", "second new value"); =>');
console.log(arr5);
console.log('console.log(arr5.shift()) =>');
console.log(arr5.shift());
console.log(arr5);

// Insert/s the element at a position of the array - splice(elem, 0)
console.log("\nInsert/s the element at a position of the array");
arr5.splice(5, 2, "inserted element", 123);
console.log('arr5.splice(5, 2, "inserted element", 123); => reassign');
console.log(arr5);
arr5.splice(7, 0, "another inserted value");
console.log('arr5.splice(7, 0, "another inserted value"); => inserts');
console.log(arr5);
// Cut element/s from and to position - slice(begin, endNotIncluded) returns new array, splice(start, deleteCount, item1, item2, ...) modifies array
// Copy array - slice()
console.log("Cut element/s from and to position, copy array");
var arr8 = arr5.slice();
console.log('var arr8 = arr5.slice();')
console.log(arr8);
console.log("arr5===arr8 - ",arr5===arr8); // false
arr8.splice(8,4);
console.log('arr8.splice(8,4);')
console.log(arr8);
console.log(arr5);

// Loop through the array
console.log("Loop through the array");
for (let i = 0; i< arr8.length; i++){
	console.log(arr8[i]);
}
for (let elem of arr8){
	console.log(elem);
}
arr8.forEach((elem, index, array)=>{
	console.log(elem);
	console.log(index);
	//console.log(array);
});
let arr9 = [1,2,3,4];
let arr10 = arr9.map((elem, index, array)=>{ // returns new array
	console.log(elem, index, array);
	return elem*2;
});
console.log(arr10);
arr10.forEach((elem, index, array)=>{
	array[index] = elem/2;
});
console.log(arr10);


var arr11 = ['a', 'b', 'c'];
var arr22 = ['d', 'e', 'f'];

var arr33 = arr11.concat(arr22);
console.log(arr33);
// results in a new array [ "a", "b", "c", "d", "e", "f" ]

var a = ['Wind', 'Rain', 'Fire'];
console.log(a.join());    // 'Wind,Rain,Fire'
console.log(a.join("")); // 'WindRainFire'
console.log(a.join('-')); // 'Wind-Rain-Fire'


