const log = require("../log")
const { Stack, LinkedListStack } = require("../Stack")

let stack = new Stack([1, 2, 3])

log.green("testing stack")

log.blue("init")
stack.list()

log.blue("pop")
stack.list()
stack.pop()
stack.list()

log.blue("push")
stack.list()
stack.push(1)
stack.list()

log.yellow("----")

log.green("testing linkedListStack")

let llstack = new LinkedListStack([1, 2, 3])

log.blue("init")
llstack.list()

log.blue("pop")
llstack.list()
llstack.pop()
llstack.list()

log.blue("push 1")
llstack.list()
llstack.push(1)
llstack.list()
