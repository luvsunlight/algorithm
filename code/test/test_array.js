const { log } = require("../util")
const { SortedArray } = require("../Array")

let a = [1, 2]

log.green("testing maxSize")
a.list()

a.setMaxLength(2)

log.blue("push")
a.push(3)
a.list()

a.pop()

log.blue("puush")
a.puush(3)
a.list()

log.blue("puuush")
a.puuush(3)
a.list()

a.puuush(4)
a.list()

a.puuush(5)
a.list()

log.yellow("----")

log.green("testing sortedArray")

let s_arr = new SortedArray(1, 4, 3)
let s_arr2 = new SortedArray(2, 5)

s_arr.setMaxLength(6)

s_arr.list()

log.blue("push 2")
s_arr.push(2)
s_arr.list()

log.blue("delete 4")
s_arr.delete(4)
s_arr.list()

log.blue("edit 2 => 5")
s_arr.edit(2, 5)
s_arr.list()

log.blue("merge two sorted array")
s_arr.list()
s_arr2.list()
s_arr.merge(s_arr2)
s_arr.list()
