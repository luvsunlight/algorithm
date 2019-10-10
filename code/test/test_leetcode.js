/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let [i, j] = [0, 1]
	for (i; i < nums.length - 1; i++) {
		if (nums[i] < nums[i + 1]) {
			nums[j++] = nums[i + 1]
		}
	}
	return nums.length === 0 ? 0 : j
}

console.log(removeDuplicates([1, 2, 2, 3]))
