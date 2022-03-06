const removeFromArray = function (arr, num) {
  for (i = 0; i < arr.length; i++) {
    let result = []
    if (arr[i] != num) {
      result = result + arr[i]
    }
  }
  return result
}

// Do not edit below this line
module.exports = removeFromArray
