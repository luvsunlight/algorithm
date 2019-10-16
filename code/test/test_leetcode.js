/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let hashmap = {}
	return nums.find(n => {
		if (!hashmap[n]) {
			hashmap[n] = 1
		} else {
			hashmap[n]++
		}
		return hashmap[n] > nums.length / 2
	})
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
