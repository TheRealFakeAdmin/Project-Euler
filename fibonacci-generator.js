fs = require('fs');

function fibonacci(exc_max) { // exclusive maximum number
    exc_max = exc_max + 1; // Adjusting for NaN [id same vs length correct]
    let f1 = 1n;
    let f2 = 2n;
    let ary = [NaN, f1, f2]; // array
    let num;
    for (var i = 3; i<exc_max; i++) {
        num = ary[i-2] + ary[i-1];
        ary.push(num);
    }
    return ary;
}

let ans = fibonacci(30);

ans.forEach(function(num, i) {
    if (!Number.isNaN(num)) {
        if (num > 1000000) {
            console.log(i-1);
        }
    }
})