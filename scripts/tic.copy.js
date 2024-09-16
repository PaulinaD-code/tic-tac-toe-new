let gameShield = document.querySelector('.container-tic-tac-toe');
let answer = document.querySelector('.js-answer');
let finalScore = `Wynik: `;
let done = 0;
let playGround = document.querySelector('.js-playGround-container');
answer.innerHTML = finalScore;
let signMovement = document.querySelector('.js-sing-movement');
let coinFlipcontainer = document.querySelector('.js-flip-coin');

renderFlipCoin();

function renderFlipCoin(){
    let page = '';
    
    let html = `
    <div class="coins-container">
    <p class="css-coin-flip-instruction">Rzuć monetą, by ustalić, kto rozpocznie grę w kółko i krzyżyk. </p>
    <div class="coin-container">
        <div class="js-draw-coin coin" >?</div>  
    </div>
    <div class="js-coin-flip-result css-coin-flip-result"></div>
    </div>
    `
    page += html;
    coinFlipcontainer.innerHTML = page;
   
    document.querySelector('.js-draw-coin').addEventListener('click', ()=>{
        coinFlip();
    })  
};

let coinSign;
let exitBtnAvailable = false;

function coinFlip(){
    let page = '';

    setTimeout(()=>{
        document.querySelector('.js-draw-coin').classList.add('coin-rotate');
    }, 10);
 
   let number = Math.random();

   if(number > 0 && number < 0.5){
    coinSign = 'X';
    
   }else if(number > 0.5){
    coinSign = 'O';
   }

   setTimeout(()=>{
    let sign;
    if(coinSign === 'X'){
        sign = 'O';
        document.querySelector('.js-draw-coin').innerHTML = 'O';
    }else if(coinSign === 'O'){
        sign = 'X';
        document.querySelector('.js-draw-coin').innerHTML = 'X';
    };

    signMovement.innerHTML = `Rozpoczyna: ${sign}`;
    
    document.querySelector('.js-coin-flip-result').innerText = ` Komputer wylosował: ${sign}. To on rozpoczyna grę`;
    
    if(!exitBtnAvailable){
        let exitBtnElement = `
        <button class="js-exit-coin-flip css-exit-coin-flip">Rozumiem, przejdź do gry</button>
        `
        page += exitBtnElement;
        coinFlipcontainer.innerHTML += page;
        exitBtnAvailable = true;
        document.querySelector('.js-exit-coin-flip').addEventListener('click', ()=>{
            coinFlipcontainer.classList.add('css-flip-coin-invisible');
            playGround.classList.add('css-playGround-container-visible');
            renderGameShield();
          });
    } 
    }, 1000);
  return coinSign;
}

function changeFontColor(element){
    if(element === 'X'){
        signMovement.style.color = "#FF8C00";
    }else {
        signMovement.style.color = 'rgba(0, 187, 255, 0.79)';
    }
}

let shield = [ "", "", "", "", "", "", "", "", "" ];

function setSign(){
    if(coinSign === 'X'){
        coinSign = 'O';
        
    }else {
        coinSign = 'X';
    }
}

function changeColor(element){
  if(coinSign === 'X'){
    element.style.color = 'rgba(0, 187, 255, 0.79)';
    signMovement.innerHTML = `Ruch: O`;
  }else if(coinSign === 'O'){
    element.style.color =  "#FF8C00";
    signMovement.innerHTML = `Ruch: X`;
  }
}

function renderGameShield(){
  let page = '';
  
  shield.forEach(()=>{
    let html = `
    <button class="js-field css-field"></button>
    `
    page += html;
    gameShield.innerHTML = page;

    document.querySelectorAll('.js-field')
      .forEach((value, index) => {
        value.addEventListener('click', ()=>{
          setSign();
          value.innerHTML = `${coinSign}`;
          shield[index] = coinSign;
          changeColor(value);
          changeFontColor(coinSign);
          value.disabled = true;
           checkTheSameSign(shield, 'X');
           checkTheSameSign(shield, 'O'); 
           done++;
           if(finalScore != `Wynik: `){
            signMovement.style.color = "#FFF";
            signMovement.innerHTML = "Koniec gry"
            document.querySelectorAll('.js-field')
              .forEach((value)=>{
                value.disabled = true;
                if(value.innerHTML != 'X' && value.innerHTML != 'O'){
                  value.innerHTML = '*';
                };
              });            
           };
           if(finalScore === `Wynik: ` && done === 9){
            finalScore = `Wynik: Remis`;
            signMovement.style.color = "#FFF";
            signMovement.innerHTML = "Koniec gry";
            answer.innerHTML = finalScore;
           }
           resultColor();
         });   
         
      });  
  });
};

document.querySelector('.js-reset-button').addEventListener('click', () => {
  shield = [ "", "", "", "", "", "", "", "", "" ];

  document.querySelectorAll('.js-field')
    .forEach((field)=>{
      field.innerHTML = '';
      field.disabled = false;
      field.style.color = '#fff';
    })

    finalScore =  `Wynik: `;
    answer.innerHTML = `Wynik: `;
    answer.style.color = 'white';
    done = 0;

    coinFlipcontainer.classList.remove('css-flip-coin-invisible');
    playGround.classList.remove('css-playGround-container-visible');
    document.querySelector('.js-coin-flip-result').innerText = '';
    coinSign = '';
    document.querySelector('.js-draw-coin').classList.remove('coin-rotate');
    exitBtnAvailable = false;
    renderFlipCoin();
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

   answer.innerHTML = finalScore
}

function resultColor(){
  if(finalScore === `Wynik: wygrywa X `){
    answer.style.color = "rgba(0, 187, 255, 0.79)";
  }else if(finalScore === `Wynik: wygrywa O `){
    answer.style.color = 'orange'; /*"rgba(0, 187, 255, 0.79)"*/;
  }else{
    answer.style.color = 'white'; 
  }
}




















