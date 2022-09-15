/*



2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?


*/

function iWantToMakeTheNameOfThisLongerThanTheContents (num, exp) {
    return Math.pow(num, exp);
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

function calc (num, exp) {
    let a = iWantToMakeTheNameOfThisLongerThanTheContents(num, exp);
    let b = hawler(a);
    let c = brawler(b);
    return c;
}

console.log(brawler(("10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376").split("")));