/*
    Generates all prime numbers from 1 to inc_max (Number | Inclusive)
*/
function primes (inc_max) { // [0]
    let prms = [2], ary = []; // [1]
    for (var i = 2; i <= inc_max; i++) { // [2]
        for (var j = 0; j < ary.length; j++) { // [3]
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

console.log(primes(200000));

/*

    [0]:    Inclusive Max number to test to
    
    [1]:
            - Primes Array
            - Array containing all past numbers
            - Max array size is in the billions... Should be Good

    [2]:    Starting at 2 because primes have anoying rules

    [3]:    Am I prime? Tests all numbers bellow

*/