function convertToRoman(num) {
  if (num < 1) return "Please enter a number greater than or equal to 1";
  if (num >= 4000) return "Please enter a number less than or equal to 3999";

  const romanNumeralMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const { value, numeral } of romanNumeralMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

function handleClick() {
  const input = document.getElementById("number").value;
  const outputElement = document.getElementById("output");

  if (!input) {
    outputElement.textContent = "Please enter a valid number";
    return;
  }

  const number = parseInt(input, 10);

  if (isNaN(number)) {
    outputElement.textContent = "Please enter a valid number";
    return;
  }

  const romanNumeral = convertToRoman(number);
  outputElement.textContent = romanNumeral;
}

document.getElementById("convert-btn").addEventListener("click", handleClick);
