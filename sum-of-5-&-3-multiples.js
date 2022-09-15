// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

function MultipleSum (exc_max) { // exclusive max number
	let nums = [];
	let rsp, ans = 0;
  for (var i=1; i<exc_max; i++) {
    rsp = 0;
    if (Number.isInteger(i/3)) rsp = 1;
		if (Number.isInteger(i/5)) rsp = 1;
    if (rsp == 1) nums.push(i);
  }
	console.log(nums);
	for (var i in nums) {
    ans += Number(nums[i]);
		console.log("i", i, "ans", ans);
  }
	return ans; 
}

console.log(MultipleSum(1000));