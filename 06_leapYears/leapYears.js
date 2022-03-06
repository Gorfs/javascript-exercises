const leapYears = function (year) {
  //very confusing but it works lmao

  if (year % 4 == 0) {
    console.log(year, "divisible by 4")
    if (year % 100 == 0 && year % 400 == 0) {
      console.log(year, "divisible by 100 and by 400 so is good")
      return true
    } else if (year % 100 == 0) {
      return False
    } else {
      return true
    }
  }
  console.log(year, "not divisible so is bad")
  return false
}

// Do not edit below this line
module.exports = leapYears
