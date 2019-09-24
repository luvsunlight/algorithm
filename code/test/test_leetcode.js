/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if (x < 0 || (x !== 0 && x % 10 === 0)) return false
	let [i, j] = [0, x]
	while (i < j) {
		i = i * 10 + (j % 10)
		j = Math.floor(j / 10)
	}
	return i === j || Math.floor(i / 10) === j
}

console.log(isPalindrome(212))
