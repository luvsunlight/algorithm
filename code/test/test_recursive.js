const { fab, fac, listSet } = require("../Recursive")
const { log } = require("../util")

log.green("testing fab")

for (let i = 1; i < 10; i++) {
	log.blue(`fab ${i}`)
	console.log(fab(i))
}

log.green("testing fac")
for (let i = 1; i < 10; i++) {
	log.blue(`fac ${i}`)
	console.log(fac(i))
}

log.green("testing listSet")
log.blue("listSet [1, 2, 3]")
console.log(listSet([1, 2, 3]))
