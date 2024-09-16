let coinFlipcontainer = document.querySelector('.js-flip-coin');

renderFlipCoin();

function renderFlipCoin(){
    let page = '';
    
    let html = `
    <div class="coins-container">
    <p>Rzuć monetą, by ustalić, kto rozpocznie grę w kółko i krzyżyk. Kliknij w obstawianą przez Ciebie monetę, by przekonać się, kto rozpocznie grę.</p>
    <div class="coin-container">
        <div class="js-x-coin coin" >X</div>
        <div class="js-o-coin coin">O</div>
    </div>
    <div class="js-coin-flip-result"></div>
    
    </div>
    `
    page += html;
    coinFlipcontainer.innerHTML = page;
   
    document.querySelector('.js-x-coin').addEventListener('click', ()=>{
        coinFlip('X');
    })

    document.querySelector('.js-o-coin').addEventListener('click', ()=>{
        coinFlip('O');
    })
};

let winner;

function coinFlip(coin){
    let page = '';
 
   let coinSign = Math.random();

   if(coinSign > 0 && coinSign < 0.5){
    coinSign = 'X';
   }else if(coinSign > 0.5){
    coinSign = 'O';
   }

    document.querySelector('.js-coin-flip-result').innerText = ` Komputer wylosował: ${coinSign}. To on rozpoczyna grę`;
  
    let exitBtnElement = `
    <button class="js-exit-coin-flip css-exit-coin-flip">Rozumiem, przejdź do gry</button>
  `
  page += exitBtnElement;
  coinFlipcontainer.innerHTML += page
  
  document.querySelector('.js-exit-coin-flip').addEventListener('click', ()=>{
    coinFlipcontainer.classList.add('css-flip-coin-invisible');
  });
}