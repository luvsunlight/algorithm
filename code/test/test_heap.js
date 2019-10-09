const { SmallHeap, BigHeap, heapSort } = require("../Heap.js")

let sh = new BigHeap([7, 5, 19, 8, 4, 1, 20, 13, 16])

console.log(sh)

sh.delete()

console.log(sh)

sh.add(20)

console.log(sh)

console.log(heapSort([7, 5, 19, 8, 4, 1, 20, 13, 16]))
