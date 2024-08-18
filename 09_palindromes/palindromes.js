const palindromes = function (str) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const normalString = str
    .toLowerCase()
    .split("")
    .filter((character) => characters.includes(character))
    .join("");

  const reversedString = normalString.split("").reverse().join("");

  return normalString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
