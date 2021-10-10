
/* --------Variables-------- */

let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const vidas = document.querySelector('.vidas');
let guessCount = 1;
let resetButton;
let vidas2 = 10;


  alert("Hola, bienvenido al juego ~~~**-Adivina el numero-**~~~")

/* --------Funciones-------- */

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Intentos anteriores: ';
    
  }
  
  guesses.textContent += userGuess + ' ';

  if(vidas2 <= 10){
    vidas2--
  }
  vidas.textContent = `Te quedan ${vidas2} intentos`
  if(0 >= vidas2){
    vidas.textContent = `Se terminaron los intentos`
  }

  if (userGuess === randomNumber) {
  lastResult.textContent = 'Felicidades! acertaste el numero';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';

    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!Termino el juego!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Incorrecto!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      if(userGuess < 0){
        lowOrHi.textContent = 'El numero NO debe ser negativo!';
      }
      else{
        lowOrHi.textContent = 'El numero que ingresaste es muy bajo!' ;
      }
    } else if(userGuess > randomNumber) {
        if(userGuess > 100){
          lowOrHi.textContent = 'El numero debe ser menor o igual que 100'
        }
        else{
          lowOrHi.textContent = 'El numero que ingresaste es muy alto!';
        }
      
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
  
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Empezar nuevo juego';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}


function resetGame() {
  guessCount = 1;
  vidas2 = 10;
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


const button =  document.querySelectorAll('button')
button  .forEach(button => {
  button.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    let btn2 = document.createElement('span')
    btn2.style.left = `${x}px`
    btn2.style.top = `${y}px`

    this.appendChild(btn2)
    setTimeout(() =>{
      btn2.remove()
    }, 600)
  })
});
