const convertToCelsius = function (num) {
  const cel = ((num - 32) * 5) / 9;
  const round = Math.round(cel * 10) / 10;
  return round;
};

const convertToFahrenheit = function (num) {
  const far = (num * 9) / 5 + 32;
  const round = Math.round(far * 10) / 10;
  return round;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
