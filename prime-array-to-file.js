let fs = require("fs");

function primes (inc_max) {
    let prms = [2], ary = [];
    for (var i = 2; i <= inc_max; i++) {
        console.debug("Testing", i);
        for (var j = 0; j < ary.length; j++) {
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

let ans;
ans = primes(5000000);
ans = ans.toString();
fs.appendFile("primes.txt", "[" + ans + "]" + "\n", function (err) {
    if (err) return console.log(err);
    console.log('Primes > primes.txt');
  });