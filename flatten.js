let arr = [1,2,3,['a','b','c'], 4,5,6,['d','e','f']]
function flatten(arr) {
	// Create a new array
let newArray =[]
arr.forEach(element => {
	if (Array.isArray (element)){
		newArray.push(...element)
	}
	else{
		newArray.push(element)
	}
	
});
	// Loop through every item in the array
	// If the item is an array, add its items to the new array
	// If not add the item itself to the new array
return newArray
	// return the new array
}
console.log(flatten(arr))