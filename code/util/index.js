const chalk = require("chalk")
const Mock = require("mockjs")
const colors = ["blue", "green", "red", "yellow"]
const log = {}

colors.map(color => (log[color] = msg => console.log(chalk[color](msg))))

const timer = (fn, args, showArgs = true, msg = "") => {
	let start = new Date().valueOf()
	fn(args)
	let end = new Date().valueOf()
	let result = ""
	result += msg ? `${chalk.green(msg)}${chalk.yellow(" => ")}` : ""
	result += `[cost ${chalk.red(end - start)} ms]`
	result += ` (${showArgs ? args : ""})`
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

const getPhoneNumbers = n => {
	let result = []
	for (let i = 0; i < n; i++) {
		result.push(Mock.Random.integer(10000))
	}
	return result
}

module.exports = {
	log,
	timer,
	getRandomArray,
	getPhoneNumbers
}
