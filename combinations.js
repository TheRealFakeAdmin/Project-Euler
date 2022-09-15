/*
INCOMPLETE : Come back to this later.

Returns all combinations of all numbers between inc_min (Number | Inclusive) & exc_max (Number | Exclusive) with max_set (Max length of Numbers)

GLOBAL LIMITS
    - min set length is 2
*/

function numbers (inc_min, exc_max) {
    let nmbs = []; // [0]
    for (var i = inc_min; i < exc_max; i++) {
        nmbs.push(i);
    }
    return nmbs;
}

function combinations (ary, max_set) {
    let lngth = ary.length;
    let cbns = []; // [1]
    for (var i = 2; i < max_set; i++) { // [2]
        for (var j = 0; j < lngth; j++) {
            for (var k = 0; k < undefined; k++) {

            }
        }
    }
}

function calc (inc_min, exc_max, max_length) {
    let a = numbers(inc_min, exc_max);
    let b = combinations(a, max_length);
    return b;
}

console.log(calc(2, 100, 5));

/*

    [0]     Array that will hold all possible numbers
                - If you need help with this function take Programming 101

    [1]:    Dictionary of combinations

    [2]:    Goes through loop changing length of output set
*/


/*

    Needs to be two part:
        - all numbers from min to max
        - combinations




*/