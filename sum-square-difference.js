/*
The sum of the squares of the first ten natural numbers is,
    1^2 + 2^2 + 3^2 + [...] 10^2 = 385

The square of the sum of the first ten natural numbers is,
    (1 + 2 + 3 + [...] + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
    3025 - 385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sum_sqr (min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i * i;
    }
    console.debug(sum);
    return sum;
}

function sqr_sum (min, max) {
    let sum = 0, sqr = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    sqr = sum * sum;
    console.debug(sum, sqr);
    return sqr;
}

function calc_diff (min, max) {
    let a = sum_sqr(min, max);
    let b = sqr_sum(min, max);
    let c = b - a;
    return c;
}

console.log(calc_diff(1, 100))