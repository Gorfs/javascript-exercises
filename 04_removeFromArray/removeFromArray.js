const removeFromArray = function (arr, num) {
  let result = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != num) {
      result.push(arr[i])
    }
  }
  return result
}

// Do not edit below this line
module.exports = removeFromArray
