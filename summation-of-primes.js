/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

// Check prime-generator.js for help
function primes (inc_max) {
    let prms = [2], ary = [];
    for (var i = 2; i <= inc_max; i++) {
        console.debug("Testing", i);
        for (var j = 0; j < ary.length; j++) {
            if ((i % ary[j]) == 0) {
                break;
            }
            if ((ary.length) == j+1) {
                prms.push(i);
            }
        }
        ary.push(i);
    }
    console.debug(ary);
    return prms;
}

function sum_array (ary) { // Adds all numbers in array together
    let sum = 0;
    for (var i = 0; i < ary.length; i++) {
        console.debug("Sum", ary[i]);
        sum += ary[i];
    }
    return sum;
}

function calc (inc_max) {
    let a = primes(inc_max);
    let b = sum_array(a);
    return b;
}

console.log(calc(10));

// 2mil = 142913828922