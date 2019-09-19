const chalk = require("chalk")
const colors = ["blue", "green", "red", "yellow"]
const log = {}

colors.map(color => (log[color] = msg => console.log(chalk[color](msg))))

const timer = (fn, args, showArray = true) => {
	let start = new Date().valueOf()
	fn(args)
	let end = new Date().valueOf()
	let result = showArray
		? chalk.red(`[cost ${end - start} ms] `) + args
		: chalk.red(`[cost ${end - start} ms] `)
	console.log(result)
}

const getRandomArray = size => {
	let result = []
	let hasNum = {}
	for (let i = 0; i < size; i++) {
		let num = Math.ceil(size * Math.random())
		if (!hasNum[num]) {
			result.push(num)
			hasNum[num] = true
		} else {
			i--
		}
	}
	return result
}

module.exports = {
	log,
	timer,
	getRandomArray
}
