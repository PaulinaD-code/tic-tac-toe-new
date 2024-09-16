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

let playerPoints = 0;
let computerPoints = 0;
let result;

function drawGame(playerChoice){
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
    }

    if(computerPoints === 3){
        result = 'Przegrałeś. Komputer rozpoczyna grę.';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        startGameBtmActive = true;
    }

    if(startGameBtmActive){
        let startGameField = document.querySelector('.button-start-game-container');
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