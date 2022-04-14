const random = document.querySelector(".randomNum");
const btnAnswer = document.querySelector("#checkAnswer");
const radioButtonSelectedGuess = document.querySelectorAll('input[name="guess_number"]');

randomNumberFunc();

/* Create a variable that will hold randomize number
  and pass it to the variable 'random' and then give to the element in HTML */
  function randomNumberFunc() {
    automaticRandomNumber = Math.floor((Math.random() * 1000) + 1);
    random.textContent = automaticRandomNumber;
  }
  
  /*Check the random number if it is divisible to 3 and/or 5*/
  let divisibility = '';
  function randomNumDivisibility() {    
    if (automaticRandomNumber % 3 === 0 && automaticRandomNumber % 5 === 0) {
      divisibility = "fizzbuzz";
    } else if (automaticRandomNumber % 3 === 0) {
      divisibility = "fizz";
    } else if (automaticRandomNumber % 5 === 0) {
      divisibility = "buzz";
    } else {
      divisibility = "none";
    }
    //alert(divisibility);
  }

  btnAnswer.addEventListener("click", buttonChecked);
  
/* Check what button user has chosen */
let selectedGuess = '';
function buttonChecked() {
  for (const radioButtonSelectedGuess_1 of radioButtonSelectedGuess) {
    if (radioButtonSelectedGuess_1.checked) {
      selectedGuess = radioButtonSelectedGuess_1.value;
    }
  }
  checkAnswerDivisibility();
}
/* Check if the divisibility of random number is 
  equal to the value of the button the user has chosen */
function checkAnswerDivisibility() {
  if (selectedGuess == ''){
    output.innerText = `No answer clicked`;
  } else if (divisibility === selectedGuess) {
    output.innerText = `Correct!\n${selectedGuess}`;
  } else {
    output.innerText = `Wrong!\nThe correct answer is ${divisibility}.`;
  }
}

function resetBtn() {
  randomNumberFunc();
  output.innerText = `- - -`;
  const radioButtonSelectedGuess123 = document.querySelector('input[type=radio][name="guess_number"]:checked');
  radioButtonSelectedGuess123.checked = false;
  selectedGuess = '';
}