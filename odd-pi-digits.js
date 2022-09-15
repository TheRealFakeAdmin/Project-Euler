/*

Assuming that Digit N*1 is the first digit (3, not 1); What is the sum of all odd digits of Pi, from digit N*1 to digit N*31,415?

*/

const fs = require('fs'); // [0]

function oddSum (ary, num) { // [1]
    let ans = 0, n; // [2]
    for (var i = 0; i < num; i++) { // [3]
        n = ary[i];
        if (n % 2) ans += Number(n); // [4]
    }
    return ans;
}

function calc (num) {
    let temp, ary, ans; // [5]
    temp = fs.readFileSync("50k-pi.txt", 'utf8', console.debug);
    ary = temp.split(''); // [6]
    ans = oddSum(ary, num);
    return ans;
}

console.log(calc(10));

/*

 [0]    Used to read and write to files

 [1]
        - ary   Check [5]
        - num   Number of digits to calculate

 [2]
        - ans   Will end up being the total sum (the answer)
        - n    Overwritten value for simplifying the loop [3]

 [3]    i loops num times, i also corosponds to digit id in array

 [4]
        - If the given digit (n) is odd, add that digit to answer (ans)
        - n is in String form, converted to Number for Math

 [5]
        - temp  Used once (for simplicity), contains pi digits from file
        - ary   Array of each digit of pi
        - ans   Check [2]

 [6]    String.slice('') is a simple way to split a String (pi represented as a String) into an Array with each character separated

*/