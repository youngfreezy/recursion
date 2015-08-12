function stringifyJSON(obj) {
    //base case:
    if (typeof(obj) === 'string') {
        return '"' + obj + '"';
    }

    if (Array.isArray(obj)) {


        for (var i = 0; i < obj.length; i++) {
            
                obj[i] = stringifyJSON(obj[i]);
            
        }

        // Could have also used map here like this:
        //obj = obj.map(function(item) {
        //     return stringifyJSON(item);
        // });

        return '[' + obj + ']';

    }

    if (obj && typeof(obj) === 'object') {

        var returned = [];

        for (var key in obj) {
            if (obj[key] === undefined || typeof(obj[key]) === 'function') {
                continue; //ie ignore
            }

            returned.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));

        }
        return '{' + returned.join() + '}';
    }


    //this is a base case:
    return "" + obj;
}
