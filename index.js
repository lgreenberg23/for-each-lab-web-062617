

function iterativeLog(array){
	array.forEach((element, index, array) =>
	console.log(`${index}: ${element}`)
	)
}

	
function iterate(callback) {
	let arr = [2, 4, 8, 16, 32]
	arr.forEach(callback)
	return arr
}
 

function doToArray(array, callback) {
	array.forEach(callback)

}