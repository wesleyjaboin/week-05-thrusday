let arr = ["a","b","c"]
let n = 5
function dropRight(arr, n) {
	
	// if n is larger than array length return []
	if (n > arr.length) {
	return[]}
	// Use n to count in from the end to get the index
else {return arr.slice (0,arr.length - n)}
	// return a slice of the array using the index as the end
}
console.log(dropRight(arr, n))
	