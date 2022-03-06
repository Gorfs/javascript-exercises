const repeatString = function (string, number) {
  let result = ""
  for (i = 0; i < number; i++) {
    result = result + string
  }
  return result
}

// Do not edit below this line
module.exports = repeatString

repeatString("this is a string", 4)
