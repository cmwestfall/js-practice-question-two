const container = document.getElementById("input-container");
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

const numbers = [];
let index = 0;
let convertedToNum;

const convertOrAlert = () => {
  convertedToNum = parseInt(userInput.value);

  if (isNaN(convertedToNum)) {
    alert("Please enter a valid number.");
    userInput.value = "";
    return null;
  } else {
    return convertedToNum;
  }
};

submitBtn.addEventListener("click", () => {
  const num = convertOrAlert();

  if (num !== null) {
    numbers.push(num);
    index++;
    container.innerHTML = `Please enter your number here: `;
    userInput.value = "";
    console.log(numbers);
  }

  if (numbers.length === 3) {
    let max = Math.max(...numbers);
    result.innerHTML = `The maximum of these numbers is ${max}`;
    numbers.length = 0;
  }
});
