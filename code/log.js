const chalk = require("chalk")
const colors = ["blue", "green", "red", "yellow"]
const log = {}

colors.map(color => (log[color] = msg => console.log(chalk[color](msg))))

module.exports = log
