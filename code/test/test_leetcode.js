/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let res = 0
	nums.map(n => {
		res ^= n
	})
	return res
}
console.log(singleNumber([1, 2, 1, 4, 2]))
