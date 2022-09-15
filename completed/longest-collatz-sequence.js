/*

The following iterative sequence is defined for the set of positive integers:

    n → n/2 (n is even)
    n → 3n + 1 (n is odd)

    Even:
        if (!(n % 2)) {
            n = n/2;
            break;
        }
    Odd:
        if ((n % 2)) {
            n = 3 * n + 1;
            break;
        }

Using the rule above and starting with 13, we generate the following sequence:

    13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
3141592653
Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

function collatz (inc_max) {
    let nums = [NaN]; // [0]
    for (var i = 1; i <= inc_max; i++) {
        nums.push(mth(i));
    }
    return nums;
}

function mth (n) { // [1]
    let ary = [];
    for (var i = 0; n !== 1; i++) {
        ary.push(n);
        switch (!(n % 2)) {
            case true:
                n = n/2;
                break;
            case false:
                n = 3 * n + 1;
                break;
            default:
                console.error("WTF");
                break;
        }
    }
  ary.push(1);
  return ary;
}

function largest_array_val (ary) {
    let max_id=0, max_val=0, val;
    for (var i = 0; i < ary.length; i++) {
        val = ary[i].length;
        if (max_val < val) {
            max_val = val;
            max_id = i;
        }
    }
    return {"length": max_val, "id": max_id, "val": ary[max_id]};
}

function calc (inc_max) {
    let a, b;
    a = collatz(inc_max);
    b = largest_array_val(a);
    return b;
}

console.log(calc(999999));
// Under 1 Million : {length: 525, id: 837799, val: Array(525)}

/*

    [0]:    Starts at 1 [Pos 0 == NaN] to align with coresponding number for ease of debugging, NaN to not be largest or smallest number

    [1]:    Input: Number | Output

*/