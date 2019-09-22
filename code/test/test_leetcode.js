var addTwoNumbers = function(l1, l2) {
	let [head1, head2, head, node, offset] = [l1, l2, null, null, 0]
	while (head1 || head2) {
		let add =
			head1 && head2
				? head1.val + head2.val + offset
				: (head1 ? head1 : head2).val + offset
		offset = add >= 10 ? 1 : 0
		add %= 10

		let newNode = { val: add, next: null }
		if (head) {
			node.next = newNode
			node = node.next
		} else {
			head = newNode
			node = newNode
		}

		if (head1) head1 = head1.next
		if (head2) head2 = head2.next
	}
	if (offset !== 0) node.next = { val: offset, next: null }
	return head
}

const arr2list = arr => {
	let [head, node] = [null, null]
	arr.map(n => {
		let newNode = { val: n, next: null }
		if (head) {
			node.next = newNode
			node = node.next
		} else {
			head = newNode
			node = newNode
		}
	})
	return head
}

let l1 = arr2list([1, 8])

let l2 = arr2list([0])

console.log(addTwoNumbers(l1, l2))
