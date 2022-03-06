//aprently this works?
const ftoc = function (tempF) {
  result = (tempF - 32) / (5 / 9)
  if (result[1] > 5) {
    result.ceil
  } else {
    result.floor
  }
  console.log(result)
  return result
}

const ctof = function (tempC) {
  result = tempC * (9 / 5) + 32
  if (result[1] > 5) {
    result.ceil
  } else {
    result.floor
  }
  console.log(result)
  return result
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
}
