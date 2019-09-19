const log = require("../log")
const { Queue, LinkedListQueue } = require("../Queue")

log.green("testing queue...")

log.blue("init")
let test_queue = new Queue([])
test_queue.list()

log.blue("enqueue 1")
test_queue.list()
test_queue.enqueue(1)
test_queue.list()

log.blue("dequeue")
test_queue.list()
test_queue.dequeue()
test_queue.list()

log.green("testing LinkedListQueue...")

log.blue("init")
let test_queue2 = new LinkedListQueue([1, 2])
test_queue2.list()

log.blue("enqueue 1")
test_queue2.list()
test_queue2.enqueue(1)
test_queue2.list()

log.blue("dequeue")
test_queue2.list()
test_queue2.dequeue()
test_queue2.list()
