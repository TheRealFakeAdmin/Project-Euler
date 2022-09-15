/*



*/

fs = require('fs');

function fibonacci(exc_max) { // exclusive maximum number
    let n1 = 1n;
    let n2 = 1n;
    let ary = [0,1,1]; // array (Don't listen to 0)
    let num;
    for (var i = 0; i<exc_max; i++) {
        num = n1 + n2;
        ary.push(num);
        n1 = n2;
        n2 = num;
    }
    return ary;
}

let ary;
ary = fibonacci(10000);

for (var i = 1; i < ary.length; i++) {
    if (ary[i].toString().split("").length >= 1000) {
        console.log({"id": i, "val": ary[i]});
        break;
    }
}

fs.writeFile("fibonacci.txt", "[" + ary.toString() + "]", function (n) { console.log(n) });
console.log("DONE");