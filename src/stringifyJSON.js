// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here


};


//if it's an array, put brackets (each in single quotes) around the object and then check each element in the array (to see if it's an array) recursively to do the same thing.  
// if it's an object, if the value is undefined or a function, ignore it.
// for each key and value in the object, stringify it partially by returning the key value pair with a colon and squiggly brackets around it. 
//If you do this recursively, if the key or value is an array, it's already taken care of. you have the object "particularities" now taken care of.
//if it's a string, return the object in double quotes. because of recursion, this will apply to the previous key value pairs.  

// at the end of the function, return a couple of single quotes + the final object. why?

obj1 = {"numbers": {"home": 123}, {"work": 567}};
// "{"numbers": {"home": 123}, {"work": 567}}"
obj2 = [1, 'false', false, ["hi"]]
//JSON.stringify([1, 'false', false, ["hi"]]); // '[1,"false",false, ["hi"]]'
obj3 = {"surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }
//output:  { "surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }