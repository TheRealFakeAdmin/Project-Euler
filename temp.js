// Converts primes.txt (5 million primes) to 1-million-primes.txt (1 million primes)

const fs = require('fs');
/* let temp, fivmilprims,prmloc,rvprms,milprims; // 5mil primes | location of reversed largest used prime | primes reversed | cut 1 Million primes
temp = fs.readFileSync("primes.txt");
fivmilprims = JSON.parse(temp);
rvprms = fivmilprims.reverse();
prmloc = rvprms.indexOf(999983);
milprims = rvprms.splice(prmloc).reverse();

fs.writeFileSync("1-million-primes.txt", "[" + milprims.toString() + "]", console.debug);
console.log(milprims.length); */

let temp, fibAry;
temp = fs.readFileSync('fibonacci.txt', 'utf8', console.debug);
fibAry = JSON.parse(temp);
fibAry = fibAry.slice(2);

console.debug(fibAry)
console.log(fibAry.indexOf(3524578));