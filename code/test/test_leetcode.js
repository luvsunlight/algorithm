/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	let node = head
	let oldNode = head
	while (node) {
		if (node.val === val) {
			if (node === head) {
				head = head.next
				node = head
				oldNode = head
				continue
			} else {
				oldNode.next = node.next
			}
		} else {
			oldNode = node
		}
		node = node.next
	}
	return head
}

console.log(
	removeElements(
		{
			val: 1,
			next: null
		},
		2
	)
)
