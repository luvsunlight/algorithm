const { BinarySearchTree } = require("../BinaryTree")

let bt = new BinarySearchTree([13, 10, 16, 9, 11, 14])
console.log(bt.find(11))
bt.delete(10)

console.log(bt)
