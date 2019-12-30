// console.log(1)
// setTimeout(() => {
// 	console.log(2)
// }, 0)
// Promise.resolve().then(() => {
// 	console.log(3)
// 	Promise.resolve().then(() => {
// 		console.log(4)
// 	})
// })

console.log("sync1")

setTimeout(function() {
	console.log("setTimeout1")
}, 0)

var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		console.log("setTimeoutPromise")
	}, 0)
	console.log("promise")
	resolve()
})

promise.then(() => {
	console.log("pro_then")
	setTimeout(() => {
		console.log("pro_timeout")
	}, 0)
})

setTimeout(function() {
	console.log("last_setTimeout")
}, 0)
console.log("sync2")
