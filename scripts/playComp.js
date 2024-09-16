const rockButton = document.querySelector('.js-rock');
const paperButton = document.querySelector('.js-paper');
const scissorsButton = document.querySelector('.js-scissors');
let playerPanel = document.querySelector('.js-result-container');
let playerPointsText = document.querySelector('.js-player-points');
let computerPointsText = document.querySelector('.js-computer-points');
let playerButton = document.querySelector('.js-player-button');
let computerButton = document.querySelector('.js-computer-bitton');
let resultImgContainer = document.querySelector('.js-clash-game-images');
let preGameContainer = document.querySelector('.js-container-game');
let startGameField = document.querySelector('.button-start-game-container');
let computerTicTacToeContainer = document.querySelector('.js-computer-tic-tac-toe');
let collectingContainer = document.querySelector('.js-sign-collecting-container');
let playbuttonsContainer = document.querySelector('.js-game-buttons');
let playerPoints = 0;
let computerPoints = 0;
let result;
let playerWins = false;
let shield = [ '', '', '', '', '', '', '', '', '' ];
let playerSign;
let computerSign;

function drawGame(playerChoice){
  computerTicTacToeContainer.classList.add('css-computer-tic-ta-toe-game-active');
    let computerMovement = Math.floor(Math.random() * 10);

    if(computerMovement >= 0 && computerMovement < 3){
        computerMovement = 'Kamień';
        computerButton.className = "play-button result-btn js-computer-bitton css-rock";
    }else if(computerMovement >= 3 && computerMovement < 6){
        computerMovement = 'Papier';
        computerButton.className = "play-button result-btn js-computer-bitton css-paper";
    }else if(computerMovement >= 6 && computerMovement <= 9 ){
        computerMovement = 'Nożyce';
        computerButton.className = "play-button result-btn js-computer-bitton css-scissors";
    }
    
    if(playerChoice === 'Kamień' && playerPoints < 3 && computerPoints < 3){
        playerButton.className = "play-button result-btn js-player-button css-rock";
        if(computerMovement === 'Kamień'){
            result = 'Remis';
        }else if(computerMovement === 'Papier'){
            result = 'Przegrałeś';
            computerPoints++; 
        }else if(computerMovement === 'Nożyce'){
            result = 'Wygrałeś';
            playerPoints++; 
        }
    }else if(playerChoice === 'Papier'){
        playerButton.className = "play-button result-btn js-player-button css-paper";
        if(computerMovement === 'Kamień'){
            result = 'Wygrałeś';
            playerPoints++; 
        }else if(computerMovement === 'Papier'){
            result = 'Remis';
        }else if(computerMovement === 'Nożyce'){
            result = 'Przegrałeś';
            computerPoints++; 
        }
    }else if(playerChoice === 'Nożyce'){
        playerButton.className = "play-button result-btn js-player-button css-scissors";
        if(computerMovement === 'Kamień'){
            result = 'Przegrałeś';
            computerPoints++; 
        }else if(computerMovement === 'Papier'){
            result = 'Wygrałeś';
            playerPoints++; 
        }else if(computerMovement === 'Nożyce'){
            result = 'Remis';
        }
    }

    let startGameBtmActive = false;
    
    if(playerPoints === 3){
        result = 'Wygrałeś. rozpoczynasz grę.';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        startGameBtmActive = true;
        playerWins = true;
    }

    if(computerPoints === 3){
        result = 'Przegrałeś. Komputer rozpoczyna grę.';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        startGameBtmActive = true;
        playerWins = false;
    }

    if(startGameBtmActive){
        
        let page = '';

        let html = `
        <button class="js-enter-game css-enter-game" >Rozumiem, przejdź do gry</button>
        `
        page += html;
        startGameField.innerHTML = page;

        document.querySelector('.js-enter-game').addEventListener('click', ()=>{
            preGameContainer.classList.add('container-game-invisible');
        })
    }

    resultImgContainer.classList.add('css-clash-game-images-visible');

    playerPanel.innerHTML = result;
    playerPointsText.innerHTML =`Twoje punkty: ${playerPoints}`;
    computerPointsText.innerHTML =`Punkty komputera: ${computerPoints}`;
}

rockButton.addEventListener('click', ()=>{
    drawGame('Kamień');
});

paperButton.addEventListener('click', ()=>{
    drawGame('Papier');
});

scissorsButton.addEventListener('click', ()=>{
    drawGame('Nożyce');
});

let gameShield = document.querySelector('.container-tic-tac-toe');
let answer = document.querySelector('.js-answer');
let secondAnswer =  document.querySelector('.js-second-answer');
let finalScore = ``;
let buttonX = document.querySelector('.js-x-button');
let buttonO = document.querySelector('.js-o-button');
let done = 0;
answer.innerHTML = finalScore;

buttonX.addEventListener('click', ()=> {
  chooseSign('X', 'O', buttonO);
  if(!playerWins){
    renderFirstMoveShield();
  }else if(playerWins === true)
  renderGameShield();
});

buttonO.addEventListener('click', ()=> {
  chooseSign('O', 'X', buttonX);
  if(!playerWins){
    renderFirstMoveShield();
  }else if(playerWins === true)
  renderGameShield();
});

function chooseSign(sign1, sign2, button){
  playerSign = sign1;
  computerSign = sign2;
  collectingContainer.innerHTML = ``;
  playbuttonsContainer.className = "container-game-invisible";
}

function randomField(){
  let count = 0;
  for(let i = 0; i < shield.length; i++){
    if(!shield[i]){
      shield[i] = computerSign;
      count++;
      break;
    }
  }
  renderGameShield();
}

function computerHit(){
  for(let i = 0; i < shield.length; i++){
    let count = 0;

    if(shield[i] && count < 1){
      let n = i + 1;
  
     if(shield[n] === '' && count < 1){
      count++;
      shield[n] = computerSign;
      break
     }
    }
  }
  renderGameShield();
};

function renderGameShield(){
  let page = '';
  
  shield.forEach(()=>{
    let html = `
    <button class="js-field css-field"></button>
    `
    page += html;
    gameShield.innerHTML = page;

      document.querySelectorAll('.js-field')
        .forEach((value, index)=>{
          value.innerHTML = shield[index];
          changeColor(shield[index], value);
          checkTheSameSign(shield, 'X');
          checkTheSameSign(shield, 'O');          
        });
        collectingContainer.innerHTML = `Twój znak: ${playerSign}`;
        collectingContainer.className = `css-sign-collecting-container-active`;  
  }); 

  document.querySelectorAll('.js-field')
  .forEach((button, index)=> {
    button.addEventListener('click', ()=>{
      done++;
      pushValue(index);
      checkTie();
    })
  })
}

function renderFirstMoveShield(){
  firstMove();
  let page = '';
  
  shield.forEach(()=>{
    let html = `
    <button class="js-field css-field"></button>
    `
    page += html;
    gameShield.innerHTML = page;

      document.querySelectorAll('.js-field')
        .forEach((value, index)=>{
          value.innerHTML = shield[index];
          checkTheSameSign(shield, 'X');
          checkTheSameSign(shield, 'O'); 
        });
  }); 

  document.querySelectorAll('.js-field')
  .forEach((button, index)=> {
    button.addEventListener('click', ()=>{
      done++;
      pushValue(index);
      checkTie();
    })
  })
};

  function pushValue(index){
    if(!shield[index]){
      shield[index] = playerSign;
    }
    renderGameShield();
    checkTheSameSign(shield, 'X');
    checkTheSameSign(shield, 'O'); 
   
    if(finalScore === ''){
      setTimeout(furt(), 2000);
    }
    
    if(finalScore !== `Wynik: wygrywa X ` && finalScore !== `Wynik: wygrywa O `){
      shield.forEach((value,)=>{
        if(value){
          value = '*'
        }
        renderGameShield();
      })
    }
  }

function computerMove(){
  let count = 0;
  shield.forEach((value, index)=> {
    if(value != [] && count < 2){
      count++
      return index;
    }
  })
}

document.querySelector('.js-reset-button').addEventListener('click', () => {
  shield = [ '', '', '', '', '', '', '', '', '' ];

  document.querySelectorAll('.js-field')
    .forEach((field)=>{
      field.innerHTML = '';
      field.style.color =  `#FFF`;
      collectingContainer.innerHTML = `Wybierz znak`;
    })

    secondAnswer.innerHTML = '';
    finalScore =  ``;
    answer.innerHTML = ``;
    done = 0;

    preGameContainer.classList.remove('container-game-invisible');
    resultImgContainer.className = 'css-clash-game-images'
    startGameField.innerHTML = '';
    playerWins = false;
    playerPoints = 0;
    computerPoints = 0;

    computerTicTacToeContainer.classList.remove('css-computer-tic-ta-toe-game-active');

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    startGameBtmActive = false;
    playerWins = false;
    gameShield.innerHTML = '';

    playerPanel.innerHTML =   ``;
    playerPointsText.innerHTML = ``;
    computerPointsText.innerHTML = ``;

    buttonO.className  = `js-o-button css-o-button`;
    buttonX.className = `js-x-button css-x-button`;
    collectingContainer.innerHTML = `Wybierz znak`;
    collectingContainer.className = `js-sign-collecting-container css-sign-collecting-container`;
    playbuttonsContainer.className = "button-container js-game-buttons"; 
})

function checkTheSameSign(array, letter){
  for(let i = 0; i < array.length; i++){
    
    if(array[0] === letter && array[1] === letter && array[2] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break
    }

    if(array[3] === letter && array[4] === letter && array[5] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break;
    }

    if(array[6] === letter && array[7] === letter && array[8] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break;
    }

    if(array[0] === letter && array[3] === letter && array[6] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break;
    }

    if(array[1] === letter && array[4] === letter && array[7] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break;
    }

    if(array[2] === letter && array[5] === letter && array[8] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break;
    }

    if(array[0] === letter && array[4] === letter && array[8] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break;
    }

    if(array[2] === letter && array[4] === letter && array[6] === letter){
      finalScore = `Wynik: wygrywa ${letter} `;
      break;
    }
  }
   answer.innerHTML = finalScore;

   if(finalScore != ``){
    secondAnswer.innerHTML = `koniec gry`;
    document.querySelectorAll('.js-field')
      .forEach((value)=>{
        value.disabled = true;
        if(value.innerHTML != 'X' && value.innerHTML != 'O'){
          value.innerHTML = '*';
        };
      });            
   };  
}

function checkTie(){
    if(finalScore === '' && done >= 9){
      finalScore = `Wynik: Remis`;
      secondAnswer.innerHTML = `koniec gry`;
      answer.innerHTML = finalScore;
    }
}

function furt(){
  if(shield[0] === playerSign && shield[1] === playerSign){
    if(!shield[2]){
    shield[2] = computerSign;
     };

  }else if(shield[1] === playerSign && shield[0] === playerSign){
    if(!shield[2]){
      shield[2] = computerSign;
    }
   
  }else if(shield[1] === playerSign && shield[2] === playerSign){
    if(!shield[0]){
      shield[0] = computerSign;
    }
    
  }else if(shield[2] === playerSign && shield[1] === playerSign){
    if(!shield[0] ){
      shield[0] = computerSign;
    }
  }else if(shield[0] === playerSign && shield[2] === playerSign){
    if(!shield[1]){
      shield[1] = computerSign;
    }
  }else if(shield[2] === playerSign && shield[0] === playerSign){
    if(!shield[1]){
      shield[1] = computerSign;
    }
  }else if(shield[3] === playerSign && shield[4] === playerSign){
    if(!shield[5]){
      shield[5] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[3] === playerSign){
    if(!shield[5]){
      shield[5] = computerSign;
    }
  }else if(shield[3] === playerSign && shield[5] === playerSign){
    if(!shield[4]){
      shield[4] = computerSign;
    }
  }else if(shield[5] === playerSign && shield[3] === playerSign){
    if(!shield[4]){
      shield[4] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[5] === playerSign){
    if(!shield[3]){
      shield[3] = computerSign;
    }
  }else if(shield[5] === playerSign && shield[4] === playerSign){
    if(!shield[3]){
      shield[3] = computerSign;
    }
  }else if(shield[6] === playerSign && shield[7] === playerSign){
    if(!shield[8]){
      shield[8] = computerSign;
    }
  }else if(shield[7] === playerSign && shield[6] === playerSign){
    if(!shield[8]){
      shield[8] = computerSign;
    }
  }else if(shield[7] === playerSign && shield[8] === playerSign){
    if(!shield[6]){
      shield[6] = computerSign;
    }
  }else if(shield[8] === playerSign && shield[7] === playerSign){
    if(!shield[6]){
      shield[6] = computerSign;
    }
  }else if(shield[6] === playerSign && shield[8] === playerSign){
    if(!shield[7]){
      shield[7] = computerSign;
    }
  }else if(shield[8] === playerSign && shield[6] === playerSign){
    if(!shield[7]){
    shield[7] = computerSign;
    }
  }else if(shield[0] === playerSign && shield[3] === playerSign){
    if(!shield[6]){
    shield[6] = computerSign;
    }
  }else if(shield[3] === playerSign && shield[0] === playerSign){
    if(!shield[6]){
    shield[6] = computerSign;
    }
  }else if(shield[3] === playerSign && shield[6] === playerSign){
    if(!shield[0]){
    shield[0] = computerSign;
    }
  }else if(shield[6] === playerSign && shield[3] === playerSign){
    if(!shield[0]){
    shield[0] = computerSign;
    }
  }else if(shield[0] === playerSign && shield[6] === playerSign){
    if(!shield[3]){
    shield[3] = computerSign;
    }
  }else if(shield[6] === playerSign && shield[0] === playerSign){
    if(!shield[3]){
    shield[3] = computerSign;
    }
  }else if(shield[1] === playerSign && shield[4] === playerSign){
    if(!shield[7]){
    shield[7] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[1] === playerSign){
    if(!shield[7]){
    shield[7] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[7] === playerSign){
    if(!shield[1]){
    shield[1] = computerSign;
    }
  }else if(shield[7] === playerSign && shield[4] === playerSign){
    if(!shield[1]){
    shield[1] = computerSign;
    }
  }else if(shield[1] === playerSign && shield[7] === playerSign){
    if(!shield[4]){
    shield[4] = computerSign;
    }
  }else if(shield[7] === playerSign && shield[1] === playerSign){
    if(!shield[4]){
    shield[4] = computerSign;
    }
  }else if(shield[2] === playerSign && shield[5] === playerSign){
    if(!shield[8]){
      shield[8] = computerSign;
    }
  }else if(shield[5] === playerSign && shield[2] === playerSign){
    if(!shield[8]){
    shield[8] = computerSign;
    }
  }else if(shield[2] === playerSign && shield[8] === playerSign){
    if(!shield[5]){
    shield[5] = computerSign;
    }
  }else if(shield[8] === playerSign && shield[2] === playerSign){
    if(!shield[5]){
      shield[5] = computerSign;
    }
  }else if(shield[8] === playerSign && shield[5] === playerSign){
    if(!shield[2]){
    shield[2] = computerSign;
    }
  }else if(shield[5] === playerSign && shield[8] === playerSign){
    if(!shield[2]){
    shield[2] = computerSign;
    }
  }else if(shield[0] === playerSign && shield[4] === playerSign){
    if(!shield[8]){
    shield[8] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[0] === playerSign){
    if(!shield[8]){
    shield[8] = computerSign;
    }
  }else if(shield[0] === playerSign && shield[8] === playerSign){
    if(!shield[4] ){
    shield[4] = computerSign;
    }
  }else if(shield[8] === playerSign && shield[0] === playerSign){
    if(!shield[4]){
    shield[4] = computerSign;
    }
  }else if(shield[8] === playerSign && shield[4] === playerSign){
    if(!shield[0]){
    shield[0] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[8] === playerSign){
    if(!shield[0]){
    shield[0] = computerSign;
    }
  }else if(shield[2] === playerSign && shield[4] === playerSign){
    if(!shield[6]){
    shield[6] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[2] === playerSign){
    if(!shield[6]){
    shield[6] = computerSign;
    }
  }else if(shield[4] === playerSign && shield[6] === playerSign){
    if(!shield[2]){
    shield[2] = computerSign;
    }
  }else if(shield[6] === playerSign && shield[4] === playerSign){
    if(!shield[2]){
    shield[2] = computerSign;
    }
  }else if(shield[2] === playerSign && shield[6] === playerSign){
    if(!shield[4]){
    shield[4] = computerSign;
    }
  }else if(shield[6] === playerSign && shield[2] === playerSign){
    if(!shield[4]){
    shield[4] = computerSign;
    }
  }else {
     randomField(); 
  }

  renderGameShield(); 
}

function findIndex(){
  let count = 0;
  for(let i = 0; i < shield.length; i++){
    count++;

    if(shield[i] === playerSign){
      if(!shield[i+1] && count < 9){
        shield[i+1] = computerSign;
      }else if (!shield[i+3] && count < 9){
        shield[i+3] = computerSign;
      }else if(!shield[i+4] && count < 9){
        shield[i+4] = computerSign;
      }else if(!shield[i+2] && count < 9){
        shield[i+2] = computerSign;
      }else if(!shield[i+5] && count < 9){
        shield[i+5] = computerSign;
      }else if(!shield[i+8] && count < 9){
        shield[i+8] = computerSign;
      }else if(!shield[i-1] && count < 9){
        shield[i-1] = computerSign;
      }else if(!shield[i-2] && count < 9){
        shield[i-2] = computerSign;
      }else if (!shield[i-3] && count < 9){
        shield[i-3] = computerSign;
      }else if(!shield[i-4] && count < 9){
        shield[i-4] = computerSign;
      }else if(!shield[i-6] && count < 9){
        shield[i-6] = computerSign;
      }else if(!shield[i-8] && count < 9){
        shield[i-8] = computerSign;
      }
    }
  }
}

function firstMove(){
  let randomValue = Math.floor(Math.random() * 10) - 1;
  if(randomValue < 0){
    randomValue = 4;
  }
 
  shield[randomValue] = computerSign;
}

function changeColor( value, element){
  if(value === 'X'){
    element.style.color = 'rgba(0, 187, 255, 0.79)';
  }else if(value === 'O'){
    element.style.color =  "#FF8C00";
  }
}


















