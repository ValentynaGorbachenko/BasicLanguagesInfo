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

/********** STRINGS ************/
// string concatenation 
// Create an empty string - "", new String()
console.log("Create an empty string");

var s_prim = 'foo';
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"

var s1 = '2 + 2';             // creates a string primitive
var s2 = new String('2 + 2'); // creates a String object
console.log(s1);
console.log(s2);
console.log(eval(s1));        // returns the number 4
console.log(eval(s2));        // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4
console.log(s1.concat(s2));
// Get the size of an string - str.length
console.log("\nGet the size of a string");
console.log("Length of the string 'foo' is ", s_prim.length); // =>3


// Find/access/read an elenemt at the position - str[index], str.charAt(index);
console.log("\nFind/access/read an elenemt at the position");
var str1 = "";
var str2 = "string";
console.log('var str1 = ""; => '+str1+'; var str2 = "string"; => '+ str2);
console.log(`variable str2 is ${str2}`);
console.log("str1[0] ",str1[0]); // undefined
console.log("str2[0] ",str2[0]); // t
console.log("str2.charAt(0) ", str2.charAt(0));
console.log("str2.charCodeAt(0) ", str2.charCodeAt(0));
// Find/access/read the element with a value - str.indexOf(value[, fromIndex]) => index or -1
console.log("\nFind/access/read the element with a value");
console.log("str2.indexOf('g') ", str2.indexOf('g')); // 5
console.log("str2.indexOf('g', 6) ", str2.indexOf('g',6)); //-1

// Modify/reassign the element at the position in the data structure - str.replace(regexp|substr, newSubstr|function)
console.log("\nModify/reassign the element at the position in a string");
console.log("String are immutable - not possible to modify at position. Only by creating a new string");
console.log('str2.replace("s", "S") => ',str2.replace("s", "S"));
console.log('str2.replace("s", "S") => ',str2.replace("s", "S"));
console.log('str2.replace(/st/i, "b") => ',str2.replace(/st/i, "b"));

//str.match(regexp) => null or array of matches

// str.search(regexp) => index of the first match or -1

// Modify/reassign the element with a value


// Add/Delete an elenemt to the end of the string - str.slice(beginIndex[, endIndex-not included])
console.log("\nAdd/Delete an elenemt to the end of the string");
console.log("Can be done only returning new string");
console.log("'Hello'.concat(' guys!') =>", 'Hello'.concat(' guys!'));
console.log("'hello'.split('') => ", 'hello'.split(""));
console.log("'hello'.split('').join('-') => ", 'hello'.split("").join('-'));

console.log("'hello'.slice(2)", 'hello'.slice(2));
console.log("'hello'.slice(2,2)", 'hello'.slice(2,4));

// Add/Delete an elenemt to the beginning of the string 
console.log("\nAdd/Delete an elenemt to the beginning of the string");
console.log('"thing to add".concat(", another thing" => ',"thing to add".concat(", another thing"));

// Insert/s the element at a position of the string - str.substr(start [, length]), str.substring(indexA, [indexB]) 
console.log("\nInsert/s the element at a position of the string");
console.log('"abcd".substr(0, 2)+ "ABCD" +"abcd".substr(2,2) =>',"abcd".substr(0, 2)+ "ABCD" +"abcd".substr(2,2));

// Cut element/s from and to position - slice(begin, endNotIncluded) returns new string, splice(start, deleteCount, item1, item2, ...) modifies string
console.log("\nCut element/s from and to position, copy string");
console.log("abbbbcde".split("").splice(1,3).join(""));
console.log("abbbbcde".match(/[a-z]/gi));

let arr = "abbbbcde".split("");
arr.splice(1,3);
let res = arr.join("");
console.log(res);

// Loop through the string
console.log("\nLoop through the string");
for (let value of "string"){ // for ... of 
	console.log(value);
}
for (let index in "string"){ // for ... in 
	console.log(index);
}

