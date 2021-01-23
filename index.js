'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity; the identity function takes in a value and returns it unchanged
 * @param{*} value: the value going inside of identity
 * @returns{*}: returns the value unchanged*/
 
function identity (value){
    //returns the value unchanged
    return value;
}
module.exports.identity = identity;

/**
 * typeof: designed to take any datatype and return its type as a string
 * 
 * @param{*} value: the value that's type is being checked
 * @returns{String}: returns the values type as a string */
 
 function typeOf (value){
   if(Array.isArray(value)){
       return 'array';
   } else if (value === null){
       return 'null';
   } else if (value instanceof Date){
       return 'date';
   } else if (typeof value === 'string'){
       return 'string';
   } else if (typeof value === 'boolean'){
       return 'boolean';
   } else if (typeof value === 'function'){
       return 'function';
   } else if (typeof value === 'number'){
       return 'number';
   } else if (value === undefined){
       return 'undefined';
   } else if (typeof value === 'object'){
       return 'object';
   }
}

module.exports.typeOf = typeOf;

/**
 * first: designed to take an array and a number, and return
 * the first <number> of items of <array>
 * 
 * @param {array}: the array to return the first value(s) from
 * @param {number}: the number of value(s) to return from the <array>
 * @returns {array): the first <number> of value(s) in the <array>
 */
function first(array, number){
    if(number <= 0){
        return [];
    } else if (number > array.length){
        return array;
    }
   else if(!Array.isArray(array)){
        return  [];
    } else if (!number || isNaN(number)){
        return array[0];
    } else {
        let myArray = []
        for (let i = 0; i < number; i++){
            myArray.push(array[i]);
        }
        return myArray
    }
}

module.exports.first = first;

/**
 * last: designed to take an array and a number, and return
 * the last <number> of items of <array>
 * 
 * @param {array}: the array to return the last value(s) from
 * @param {number}: the number of value(s) to return from the array
 * @returns {array}: array containing the last <number> of value(s) from the array
 */
 
 function last(array, number){
    if(number <= 0){
    //return an empty array
        return [];
    //if the number is greater than the length of the array
    } else if (number > array.length){
        //return the whole array
        return array;
    }
    //if the argument passed into array is not an array
   else if(!Array.isArray(array)){
       //return an empty array
        return  [];
        //if num doesnt exist or is not a number
    } else if (!number || isNaN(number)){
        //return the last value in the array
        return array[array.length-1];
    } else {
        //declare empty array
   return array.slice(-number, array.length);
    }
}

module.exports.last = last

/**
 * indexOf: designed to take in an array and a value and return the
 * index of the first occurance of value
 * 
 * @param {array} array: the array that we are checking for value
 * @param {*} value: the value that we are checking for the first occurance of in array
 * @returns {number}: the number of the index of the first occurance of value in array
 */
 
 function indexOf(array, value){
    if(!array.includes(value)){
        return -1;
    }
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] === value){
           return i;
       } 
       }
    } 

module.exports.indexOf = indexOf

/**
 * contains: designed to return true if array contains value
 * @param {array} array: the array we are checking for value
 * @param {*} value: the value that we are checking is inside array
 * @returns {boolean}: true if array contains value, false otherwise
 */

function contains(array, value){
    
    if(array.includes(value)){
        return true;
    } else if(!array.includes(value)){
        return false;
    }
    
}

module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: designed to return a new array with all duplicate elements 
 * from the input array removed
 * @param {array} array: the array we are removing duplicates from
 * @returns {array}: the array with the duplicates removed
 */
 
 function unique(array){
     let newArr = [];
for(let item of array){
    //
    if(indexOf(newArr, item) === -1) {
        newArr.push(item);
    }
} return newArr;
 }
 
 module.exports.unique = unique;
 
/**
 * filter: designed to filter through an array and return a new array of elements for which
 * calling function returned true
 * @param {array} array: the array we are passing to function and potentially returning into new array
 * @param {function} function: the function we are passing array into to test and return into our new array
 * @returns {array} newArr: the array full of only values that passed true after the function runs on array
 */
 
 function filter(array, func){
    let newArr = []
each(array, function(e,i,a){
    if(func(e, i, a) === true){
        newArr.push(e);
    }
})
    return newArr
}
module.exports.filter = filter;

/**
 * reject: designed to filter through an array and return a new array of elements for which
 * calling function returned false
 * @param {array} array: the array we are passing to function and potentially returning into new array
 * @param {function} function: the function we are passing array into to test and return into our new array
 * @returns {array} newArr: the array full of only values that passed false after the function runs on array
 */
 
function reject(arr, func){
    let newArr = []; 
    each(arr, function(e, i, a) {
        if(func(e,i,a) === false){
            newArr.push(e);
        } 
    });
    return newArr;
};

/**
 * Partition: designed to take an array and a function and return an array
 * made up of two sub arrays, one with values that passed the test function,
 * one that failed.
 * @param {array}: the array to be tested and split up
 * @param {func}: the function we are testing the array with
 * @returns {array}; the finalArray that is the array containing two arrays
 */
 
 function partition(arr, func){
    let finalArray = [[], []];
    each(arr, function(e,k,a){
        if(func(e, k, a) === true){
        finalArray[0].push(e);
    } else {
        finalArray[1].push(e);
    }
      });
      return finalArray }

module.exports.partition = partition;

/** 
 * Map: is designed to take a collection and a function and return the array
 * with each value modified by the function (iterateee)
 * 
 * @param {collection} collection: the object or array to be iterated upon
 * @parm {function} action: the function to be done on each value in the collection and returned
 * into new array
 * @returns {array} newArr; an array of the values in collection modified by action
 */

function map(collection, action){
    let newArr = [];
each(collection, function(e, i, a){
    newArr.push(action(e, i, a))
})
    return newArr;
}

module.exports.map = map;

/**
 * pluck: designed to take an array of objects, and a property and returns
 * the value of property of each object in the array in a new array.
 * @param {collection} collection: 
 * @param {*} property: the property that is being plucked from each object in the array
 * @returns {array} newArr: the array with the value at key property of each object in the array
 */
 
 function pluck(collection, property){
    var newArr = [];
    map(collection, function(e, k, c){
        newArr.push(e[property]);
    })
    return newArr;
}

module.exports.pluck = pluck;

/**
 * every: designed to take a collection and a function and return
 * true only if every value in the collection passes true from the 
 * input function
 * 
 * @param{collection} collection: the collection which values are being passed
 * to the test function
 * @param{function} func: the test function which the values of collection are being passed inot
 * @returns{boolean}: a true or false value representing if every value passed true or not
 */
function every(collection, func){
    
    let result = true
    if(typeof func !== "function"){
        each(collection, function(e, i, a){
            if(e === false){
                result = false;
        }
        })
        return result
    } else { 
        each(collection, function(e, i, a){
        if(func(collection[i], i, collection) === false){
            result = false
        }
    })
    }
    return result
}

module.exports.every = every;

/**
 * some: designed to take a collection and a test function
 * and return true if even one value of the collection returns true
 * 
 * @param{collection} collection: the input collection to be tested
 * @param{function} func: the test function
 * @returns{boolean} result: boolean value representing if any values passed the test
 */
 
function some(collection, func){
//set variable result to true
let result = true;
//if func is not defined or 'falsy'
if(!func){
    //go through collection
for(var item of collection){
    //if anything in collection is falsy
    if(!item){
        //return false
        return false;
    }
}
}
//if any of items in collection return false from function func
else if(filter(collection, func).length > 0){
    //set variable result to true
    result = true;
} else {
    //if none fail, set variable result to false
    result = false;
}
//return result
return result;
}

module.exports.some = some;

/**
 * reduce: is designed to use a function to reduce an array of values into
 * a single value, using a seed as a starting value to iterate upon
 * 
 * @param {array} array: the array we are reducing to one value
 * @param {function} func: the iteratee we are using on each value in array
 * @param {number} seed: either the beginning value of iteration, or the previous result
 * @returns {number} seed: the final result of all of the objects in the array boiled down
 */
 
function reduce(array, func, seed){
if(seed === undefined){
    seed = array[0];
each(array, function(e,i,a){
    if(i !== 0){
        //
        seed = func(seed, e, i, a);
    }
})
return seed}
else {
    each(array, function(e,i,a){
        seed = func(seed, e, i, a);
   })
 return seed;} 
}

module.exports.reduce = reduce;

/**
 * extend: designed to take any number of objects and 
 * copy all succeeding objects into the first object
 * @param {object} object1: initial object that all the values of 
 * concurrent objects are copied into
 * @param {...object} ...object: any number of objects that could be passed
 * into the function and copied into object 1
 * @returns{object} object1: the object with all other objects values copies into it
 */
function extend(object1, ...object){
 Object.assign(object1, ...object)
 return object1;
}

module.exports.extend = extend;