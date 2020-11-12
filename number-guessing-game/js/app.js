let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Ваши варианты: ";
    }
    guesses.textContent  += userGuess + " ";

    if (userGuess === randomNumber) {
        lastResult.textContent = "Превосходно! Ты угадал😁";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = "Неправильно";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Последнее предположение было меньше чем случайное число!";
            lowOrHi.style.backgroundColor = "yellow"
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Последнее предположение было больше чем случайное число!";
            lowOrHi.style.backgroundColor = "yellow"
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();

}
        

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Новая игра';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
guessCount = 1;
const resetParas = document.querySelectorAll('.resultParas p');
for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
}

resetButton.parentNode.removeChild(resetButton);
guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();
lastResult.style.backgroundColor = 'white';
randomNumber = Math.floor(Math.random() * 100) + 1;
}