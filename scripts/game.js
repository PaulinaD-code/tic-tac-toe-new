let gameShield = document.querySelector('.container-tic-tac-toe');
let shield = [];

renderGameShield();

let sign;

document.querySelector('.js-x-button').addEventListener('click', ()=> sign = 'X');

document.querySelector('.js-o-button').addEventListener('click', ()=> sign = 'O');

function renderGameShield(){
  let page = '';
  
  for(let i = 0; i < 9; i++){
    let html = `
    <div class="js-field css-field"></div>
    `
    page += html;
    gameShield.innerHTML = page;

    document.querySelectorAll('.js-field')
      .forEach((value, index) => {
        value.addEventListener('click', ()=>{
          console.log('clicked!');
          value.innerHTML = `${sign}`;
          shield.push(sign);
          console.log(shield)
        });
      });   
}
}





