/*

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/

function factorial(num) {
    let ans = num;
    for (let i = 2; i < num; i++) {
        ans *= i;
    }
    console.debug(ans);
    return ans;
}

function hawler (num) {
    let str = num.toString();
    let ary = str.split("");
    return ary;
}

function brawler (ary) {
    let num = 0;
    for (let i = 0; i < ary.length; i++) {
        num += Number(ary[i]);
    }
    return num;
}

function calc (num) {
    let a = factorial(num);
    let b = hawler(a);
    let c = brawler(b);
    return c;
}

console.log(calc(10));
//console.log(brawler("93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000".split("")));