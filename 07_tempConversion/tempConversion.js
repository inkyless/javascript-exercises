const convertToCelsius = function(temp) {
  let celc = temp-32;
  const ratio = 5/9;
  let result = Math.round((celc * ratio)*10)/10
  return result
};

const convertToFahrenheit = function(temp) {
  let celc = temp;
  const ratio = 9/5;
  let result = Math.round(((celc * ratio)+32)*10)/10
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
