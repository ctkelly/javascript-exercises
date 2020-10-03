const ftoc = function(F) {
  let unroundedC = (F - 32) * 5 / 9;
  let roundedCTemp = Math.round(unroundedC * 10) / 10;
  return roundedCTemp;
}

const ctof = function(C) {
  let unroundedF = (C * 9 / 5) + 32;
  let roundedFTemp = Math.round(unroundedF * 10) / 10;
  return roundedFTemp;
}

module.exports = {
  ftoc,
  ctof
}
