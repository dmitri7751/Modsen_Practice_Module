'use strict';

const stringToArray = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('');
    }
    return str.trim().split(/\s+/);
};

console.log(stringToArray('Hi, my name is Dima')); 
