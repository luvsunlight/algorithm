const { log } = require("../util")
const {
	binarySearch,
	binarySearchFirstEqual,
	binarySearchLastEqual
} = require("../Search")

log.green("testing binarySearch")

log.blue("1, [1, 2, 3, 4]")
console.log(binarySearch(1, [1, 2, 3, 4]))

log.blue("2, [1, 1, 2, 2, 2, 3, 4]")
console.log(binarySearch(2, [1, 1, 2, 2, 2, 3, 4]))

log.green("testing binarySearchFirstEqual")

log.blue("2, [1, 1, 2, 2, 2, 2, 3, 4]")
console.log(binarySearchFirstEqual(2, [1, 1, 1, 2, 2, 2, 2, 3, 4]))

log.green("testing binarySearchLastEqual")

log.blue("2, [1, 1, 2, 2, 2, 2, 3, 3, 4]")
console.log(binarySearchLastEqual(2, [1, 1, 2, 2, 2, 2, 3, 3, 4]))
