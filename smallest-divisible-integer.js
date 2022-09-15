/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function calc(inc_max) { // Inclusive Max | Min always 1
    let isAns = 0; // Will set to 1 when correct number
    for (var i = inc_max; i > 0; i++) { // [0]
        //console.debug("0", i)
        for (var j = 2; j <= inc_max; j++) { // [1]
            if (i % j) { // [2]
                //console.debug("1", i, j);
                break;
            }
            //console.debug("2", i, j)
            if (j == inc_max) isAns = 1;
        }
        if (isAns == 1) break;
    }
    //console.debug("End", i)
    return i;
}

console.log(calc(10));

/*

    [0] :
            - Answer will never be bellow the max number, inc_max saves micro-seconds
            - Keeps going up (to hypothetical Infinity) until break [2] when correct answer found

    [1] :   1 (Min) is the start number, let's forget it exists and skip to 2

    [2] :   
            - For inc_max=10, would be equivelant to !((n % 2) & (n % 3) & (n % 4) & (n % 5) & (n % 6) & (n % 7) & (n % 8) & (n % 9) & (n % 10)) == 1
            - If n evenly divides to all integers up to inc_max, break

*/