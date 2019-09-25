const { HashTable } = require("../HashTable")

let hashtable = new HashTable()

hashtable.add(1, "a")

hashtable.add(11, "b")

console.log(hashtable.get(11))
