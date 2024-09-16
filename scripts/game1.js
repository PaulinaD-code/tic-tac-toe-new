let gameShield = document.querySelector('.container-tic-tac-toe');
let answer = document.querySelector('.js-answer');

let shield = [ [], [], [], [], [], [], [], [], [] ];

renderGameShield();

let sign;

document.querySelector('.js-x-button').addEventListener('click', ()=> sign = 'X');

document.querySelector('.js-o-button').addEventListener('click', ()=> sign = 'O');

function renderGameShield(){
  let page = '';
  
  shield.forEach(()=>{
    let html = `
    <div class="js-field css-field"></div>
    `

    page += html;
    gameShield.innerHTML = page;

    document.querySelectorAll('.js-field')
      .forEach((value, index) => {
        value.addEventListener('click', ()=>{
          value.innerHTML = `${sign}`;
          shield[index] = sign;
          console.log(shield);
           checkTheSameSign(shield, 'X');
           checkTheSameSign(shield, 'O'); 
           if(finalScore != `Wynik: `){
            console.log('koniec gry');
            document.querySelector('.js-second-answer').innerHTML = `koniec gry`;
            document.querySelectorAll('.js-field')
              .forEach((value)=>{
                if(value.innerHTML != 'X' && value.innerHTML != 'O'){
                  value.innerHTML = '*';
                };
              });
           };
           if(finalScore ===  `Wynik: ` && 
           !shield[ [], [], [], [], [], [], [], [], []] ) {
            document.querySelectorAll('.js-field')
            .forEach((value)=>{
              if(value.innerHTML === 'X' && value.innerHTML === 'O'){
                finalScore = 'Remis';
              };
            });
           }           
         });
      });   
  })
}

document.querySelector('.js-reset-button').addEventListener('click', () => {
  shield = [
    [], [], [], [], [], [], [], [], []
  ];

  document.querySelectorAll('.js-field')
    .forEach((field)=>{
      field.innerHTML = '';
    })

    answer.innerHTML = `Wynik: `;
    document.querySelector('.js-second-answer').innerHTML = '';
    finalScore =  `Wynik: `;
})

let finalScore = `Wynik: `;

function checkTheSameSign(array, letter){
  for(let i = 0; i < array.length; i++){
    
    if(array[0] === letter && array[1] === letter && array[2] === letter){
      finalScore = `wygrywa ${letter} `;
      break
    }

    if(array[3] === letter && array[4] === letter && array[5] === letter){
      finalScore = `wygrywa ${letter} `;
      break;
    }

    if(array[6] === letter && array[7] === letter && array[8] === letter){
      finalScore = `wygrywa ${letter} `;
      break;
    }

    if(array[0] === letter && array[3] === letter && array[6] === letter){
      finalScore = `wygrywa ${letter} `;
      break;
    }

    if(array[1] === letter && array[4] === letter && array[7] === letter){
      finalScore = `wygrywa ${letter} `;
      break;
    }

    if(array[2] === letter && array[5] === letter && array[8] === letter){
      finalScore = `wygrywa ${letter} `;
      break;
    }

    if(array[0] === letter && array[4] === letter && array[8] === letter){
      finalScore = `wygrywa ${letter} `;
      break;
    }

    if(array[2] === letter && array[4] === letter && array[6] === letter){
      finalScore = `wygrywa ${letter} `;
      break;
    }
  }

  answer.innerHTML = finalScore
}

let count = 0;
let count2 = 0;

function nextoToMe(array, startNumber, incrementStep, word, word2){

  for(let i = startNumber; i < array.length; i + incrementStep){

    if(array[i] === word && count < 4){
      console.log(`${word} wins`);
      count++;
      return word;
    }else if(array[i] === word2 && count2 < 4){
      console.log(`${word2} wins`);
      count2++;
      return word
    }else{
      console.log(`Remis`);
      break;
    }
  }
}

let verdict;
function checkResult(array, startNumber, incrementStep, word, word2){

  for(let i = startNumber; i < array.length; i + incrementStep){

    if(array[i] === word && count < 4){
      console.log(`${word} wins`);
      count++;
      verdict = `${word} wins`;
      break;
    }else if(array[i] === word2 && count2 < 4){
      console.log(`${word2} wins`);
      count2++;
      verdict = `${word2} wins`;
      break;
    }else{
      console.log(`Remis`);
      verdict = false;
      break;
    }
  }
}

let isVerdict = false;

function crazyLoop(array, startNumber, iteralLenght, incrementStep, word, word2){

  for(let i = startNumber; i < iteralLenght; i + incrementStep){
 
    if(array[i] === word && count < 4){
      count++;
      if(count === 3){
        console.log(`${word} wins`);
        isVerdict = true;
        break;
      }
    }else if(array[i] === word2 && count2 < 4){
      count2++;
      if(count2 === 3){
        console.log(`${word2} wins`);
        isVerdict = true;
        break;
      }
    }
  }
  return isVerdict;
}

function next(array, startNumber, incrementStep, word, word2){
  let = result;

  for(let i = startNumber; i < array.length; i + incrementStep){
   
    if(array[i] === word && count < 4){
      result = `${word} wins`;
      count++;
      break;
    }else if(array[i] === word2 && count2 < 4){
      result =`${word2} wins`;
      count2++;
      break;
    }
  }
  return result;
}

let checkBtn = document.querySelector('.js-check-result')

checkBtn.addEventListener('click', ()=>{

  if(finalScore ===  `Wynik: `){
    finalScore = 'Remis';
  }
  answer.innerHTML = `${finalScore}`
  console.log('funkcja dziala');
});









