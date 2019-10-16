const BF = (str1, str2) => {
	if (str1.length < str2.length) return -1
	for (let i = 0; i < str1.length - str2.length; i++) {
		let k = i
		for (let j = 0; j < str2.length; j++) {
			if (str1[k++] !== str2[j]) break
		}
		if (k - i === str2.length) return i
	}
	return -1
}

console.log(BF("abcds", "bcda"))
