/*

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

*/

function loop_prime (prm) {
    let ary = prm.split('');
    let last, crcls = [prm];
    for (var i = 0; i < prm.length; i++) {
        last = prm.shift();
        prm.push(last);
    }
}

function calc (inc_max) { // forcing it to work, inc_max unused
    const fs = require('fs');
    let temp, milprims;
    temp = fs.readFile("1-million-primes.json");
    milprims = JSON.parse(temp);
    // Brain empty
}

console.log(calc(NaN));

/* 



*/