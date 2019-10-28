/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	for (let i = 0; i < 9; i++) {
		let hashmap = {}
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === ".") continue
			if (hashmap[board[i][j]]) {
				return false
			} else {
				hashmap[board[i][j]] = true
			}
		}
	}
	for (let i = 0; i < 9; i++) {
		let hashmap = {}
		for (let j = 0; j < 9; j++) {
			if (board[j][i] === ".") continue
			if (hashmap[board[j][i]]) {
				return false
			} else {
				hashmap[board[j][i]] = true
			}
		}
	}
	for (let i = 0; i < 9; i += 3) {
		for (let j = 0; j < 9; j += 3) {
			let hashmap = {}
			for (let m = i; m < i + 3; m++) {
				for (let n = j; n < j + 3; n++) {
					if (board[m][n] === ".") continue
					if (hashmap[board[m][n]]) {
						return false
					} else {
						hashmap[board[m][n]] = true
					}
				}
			}
		}
	}

	return true
}

console.log(
	isValidSudoku([
		[".", ".", ".", ".", "5", ".", ".", "1", "."],
		[".", "4", ".", "3", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", "3", ".", ".", "1"],
		["8", ".", ".", ".", ".", ".", ".", "2", "."],
		[".", ".", "2", ".", "7", ".", ".", ".", "."],
		[".", "1", "5", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", "2", ".", ".", "."],
		[".", "2", ".", "9", ".", ".", ".", ".", "."],
		[".", ".", "4", ".", ".", ".", ".", ".", "."]
	])
)
