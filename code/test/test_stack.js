const { log } = require("../util")
const { Stack, LinkedListStack } = require("../Stack")

let stack = new Stack([1, 2, 3])

log.green("testing stack")

log.blue("init")
stack.list()

log.blue("push 4")
stack.list()
stack.push(4)
stack.list()

log.blue("pop")
stack.list()
stack.pop()
stack.list()

log.yellow("----")

log.green("testing linkedListStack")

let llstack = new LinkedListStack([])

log.blue("init")
llstack.list()

log.blue("push 4")
llstack.list()
llstack.push(4)
llstack.list()

log.blue("pop")
llstack.list()
llstack.pop()
llstack.list()
