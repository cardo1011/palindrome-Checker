// "use strict";

const checkButton = document.getElementById("check-btn");
const resultBox = document.getElementById("result-container");

function palindromeChecker() {
  //getting input from text field
  let input = document.getElementById("input-text").value.trim();

  if (!input) {
    alert("Please input a value");
    return;
  }

  //converting input to a reversed string
  const reversedStr = input.split("").reverse().join("");

  //checking and returning if string is a palindrome
  if (reversedStr === input) {
    resultBox.style.backgroundColor = "blue";
    resultBox.style.fontSize = "3em";
    return `${input} is a Palindrome!`;
  } else {
    resultBox.style.backgroundColor = "red";
    resultBox.style.fontSize = "3em";
    return `${input} is NOT a Palindrome`;
  }
}

//event listener calls palindromeChecker when "check" button is clicked
checkButton.addEventListener("click", function () {
  resultBox.textContent = palindromeChecker();
});
