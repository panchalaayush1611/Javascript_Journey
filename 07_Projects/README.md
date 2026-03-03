# DOM and JS Projects

## Project Link

[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Code of Projects

## Project - 1's Code

```javascript
const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "yellow") {
      // body.style.backgroundColor = 'yellow';
      body.style.backgroundColor = e.target.id; // we can use this also, e.target.id also holds the value (color too)
    }
  });
});
```

## Project - 2's Code

```javascript
const form = document.querySelector("form");
// this usecase will give empty value..!
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value); // we used parseInt cause .value will give in string format
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if ((height === "") | (height < 0) | isNaN(height)) {
    results.innerHTML = `Please insert valid height ${height}`;
  } else if ((weight === "") | (weight < 0) | isNaN(weight)) {
    results.innerHTML = `Please insert valid weight ${weight}`;
  } else {
    // bmi formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result show
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project - 3's Code

```javascript
const clock = document.getElementById("clock");
setInterval(function () {
  let getDate = new Date();
  // we don't want to run the date on console.
  // console.log(getDate.toLocaleTimeString())
  clock.innerHTML = getDate.toLocaleTimeString();
}, 1000);
// why this is giving update instantly? - because the method is running on every second.
```

## Project - 4's Code

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// check you are eligible to play or not
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // validate that value is between 1 to 100 or not
  if (isNaN(guess)) {
    alert("Kindly enter a valid number!");
  } else if (guess < 1) {
    alert("Kindly enter a number more than 1");
  } else if (guess > 100) {
    alert("Kindly enter a number which is less than or equal to 100!");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over,  Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check that the value is equal to random number or not, if yes then it will use displayMessage and print that you won or check that low or high and tell
  if (checkGuess === randomNumber) {
    displayMessage("You guessed it right!");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOOO low");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOOO high");
  }
}

function displayGuess(guess) {
  // clean the values for next ones, and updates the array which we have used, also updates remaining guesses
  // update the userInput with empty string
  userInput.value = "";
  // push the guess values to guessSlot
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess + 1}`;
}

function displayMessage(message) {
  // displays the message using DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project - 5's Code

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div color= 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div> 
  `;
});
```

## Project - 6's Code

```javascript
// random color generation, through random hex values

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

// now reference for start and stop buttons

let intervalId;

const startChaningColor = function () {
  // check point for intervalId because we can't set the value null without any reason
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChaningColor = function () {
  clearInterval(intervalId);
  // now we will add null to intervalId because it is overwriting on every start stop start..
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChaningColor);
document.querySelector("#stop").addEventListener("click", stopChaningColor);
```
