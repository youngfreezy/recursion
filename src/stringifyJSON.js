// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

function stringifyJSON(obj) {
    // your code goes here

    //base case:

    if (obj && typeof(obj) === 'string') {
        return '"' + obj + '"';
    }

    if (Array.isArray(obj)) {

        //tried to do it iteratively but got stuck, made sense to use map.  Don't know if it's possible to do it iteratively since you are
        //trying to go into the indices and add brackets and return that array - there would probably be lots of extra steps.  Iteratively, I was able to 
        //get as far as getting all the right arrays bracketed, but once bracketed, I couldn't get what needed to be stringified (ie actual strings), with 
        //recursion. FINALLY GOT IT by checking for "obj" in the string part (base case, line 11)! So here is the iterative version with the version with map in comments.  
        //could  have put the call to stringifyJSON in an else also, but due to how recursion works in the call stack, it's the same thing as putting it inside the if also

        for (var i = 0; i < obj.length; i++) {
            if (Array.isArray(obj)) {
                obj[i] = stringifyJSON(obj[i]);
                stringifyJSON(obj[i]);
            }




            //     // else{ };
            //     else {
            //         stringifyJSON(obj[i]);
            //     }
        }

        // obj = obj.map(function(item) {
        //     return stringifyJSON(item);
        // });

        return '[' + obj + ']';

    }

    //why this check of 'obj'? Not sure. It worked when I was stuck above. Need to clarify. 

    if (obj && typeof(obj) === 'object') {
        //var returned;
        var returned = [];

        for (var key in obj) {
            if (obj[key] === undefined || typeof(obj[key]) === 'function') {
                continue; //ie ignore
            }
            //could I have done this with map/using recursion? don't think so, because you are doing different things inside the object (adding a colon) and outside (adding brackets)
            // I have a feeling this could be refactored to better use recursion. Maybe a check to see if you are in an inner object, and if so have the broader function add a colon
            //and if you are at a parent object, just have it add brackets? tried it, doesn't seem possible since they need to be added in different places so then you would need to do a bunch of slicing.
            // If you're using all those array methods might as well do it like this. Why not with map? I think you could, but I got confused by the obj callback parameters, esp since you going to the key, 
            // you have to map to the key of the key, which gets confusing:

            //      if(obj[key] && typeof(obj[key] === 'object')) {


            //     obj[key] = obj[key].map(function(obj[key]){
            //     returned.push(stringifyJSON(obj[key]) + ":" + stringifyJSON(obj[key][key]));
            //     });
            // }
            returned.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
            //});
        }
        return '{' + returned.join() + '}';
    }



    // at the end of the function, return a couple of quotes + the final object. why? same thing happened on twittler lol.

    return "" + obj;
}

console.log(stringifyJSON(["hi", [3, 4]]));



//if it's an array, put brackets (each in single quotes) around the object and then check each element in the array (to see if it's an array) recursively to do the same thing.  
// if it's an object, if the value is undefined or a function, ignore it.
// for each key and value in the object, stringify it partially by returning the key value pair with a colon 
//If you do this recursively, if the key or value is an array, it's already taken care of. you have the object "particularities" now taken care of.
//if it's a string, return the object in double quotes. because of recursion, this will apply to the previous key value pairs and any strings contained therein. Same goes for arrays.   



var obj1 = {
    "numbers": {
        "home": 123
    },
    "mobile": {
        "work": 567
    }
};
// "{"numbers": {"home": 123}, {"work": 567}}"
//obj2 = [1, 'false', false, ["hi"]]
//JSON.stringify([1, 'false', false, ["hi"]]); // '[1,"false",false, ["hi"]]'
//obj3 = {"surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }
//output:  { "surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }