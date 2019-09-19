const fab = n => (n === 1 || n === 2 ? 1 : fab(n - 1) + fab(n - 2))

const fac = n => (n === 1 ? 1 : n * fac(n - 1))

const listSet = set => {
	if (set.length === 1) {
		return [set]
	} else {
		let restSet = set.slice(1, set.length)
		return [
			[set[0]],
			...listSet(restSet),
			...listSet(restSet).map(i => [set[0], ...i])
		]
	}
}

module.exports = {
	fab,
	fac,
	listSet
}
