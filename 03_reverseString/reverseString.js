const reverseString = function (string) {
  let result = ""
  let index = 0
  Longueur = string.length
  console.log(Longueur)
  for (i = 0; i < Longueur; i++) {
    index = string.length - i - 1
    result = result + string[index]
    console.log(result)
  }
  return result
}

// Do not edit below this line
module.exports = reverseString
