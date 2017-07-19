function iterativeLog(array) {
  array.forEach(function func(elem, index, arr) {
    console.log(`${index}: ${elem}`)})
}

function iterate(callback) {
  let internalArray = [3,4,42,76]
  internalArray.forEach(callback)
  return internalArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
