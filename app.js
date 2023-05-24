const game = () => {
  let JayrScore = 0;
  let enemybotScore = 0;
  let moves = 0;


  // Function to 
  const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');
      const JayrOptions = [rockBtn,paperBtn,scissorBtn];
      const enemybotOptions = ['rock','paper','scissors']
        
      // Function to start playing game
      JayrOptions.forEach(option => {
          option.addEventListener('click',function(){

              const rounds = document.querySelector('.rounds');
              moves++;
              rounds.innerText = `Number of rounds : ${5-moves}`;
                

              const choiceNumber = Math.floor(Math.random()*3);
              const enemybotChoice = enemybotOptions[choiceNumber];

              // Function to check who wins
              winner(this.innerText,enemybotChoice)
                
              // Calling gameOver function after 5 rounds
              if(moves == 5){
                  gameOver(JayrOptions,rounds);
              }
          })
      })
        
  }

  // Function to decide winner
  const winner = (Jayr,enemybot) => {
      const result = document.querySelector('.result');
      const JayrScoreBoard = document.querySelector('.p-count');
      const enemybotScoreBoard = document.querySelector('.c-count');
      Jayr = Jayr.toLowerCase();
      enemybot = enemybot.toLowerCase();
      if(Jayr === enemybot){
          result.textContent = 'Tie'
      }
      else if(Jayr == 'rock'){
          if(enemybot == 'paper'){
              result.textContent = 'Enemybot Won';
              result.style.color = 'black';
               enemybotScore++;
              enemybotScoreBoard.textContent = enemybotScore;

          }else{
              result.textContent = 'Jayr Won'
              JayrScore++;
              result.style.color = 'black';
              JayrScoreBoard.textContent = JayrScore;
          }
      }
      else if(Jayr == 'scissors'){
          if(enemybot == 'rock'){
              result.textContent = 'Enemybot Won';
              result.style.color = 'black';
              enemybotScore++;
              enemybotScoreBoard.textContent = enemybotScore;
          }else{
              result.textContent = 'Jayr Won';
              result.style.color = 'black';
              JayrScore++;
              JayrScoreBoard.textContent = JayrScore;
          }
      }
      else if(Jayr == 'paper'){
          if(enemybot == 'scissors'){
              result.textContent = 'Enemybot Won';
              result.style.color = 'black';
              enemybotScore++;
              enemybotScoreBoard.textContent = enemybotScore;
          }else{
              result.textContent = 'Jayr Won';
              result.style.color = 'black';
              JayrScore++;
              JayrScoreBoard.textContent = JayrScore;
          }
      }
  }

  // Function to run when game is over
  const gameOver = (JayrOptions,rounds) => {

      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.result');
      const reloadBtn = document.querySelector('.reload');

      JayrOptions.forEach(option => {
          option.style.display = 'none';
      })

     
      chooseMove.innerText = 'Game Over!!'
      rounds.style.display = 'magenta';

      if(JayrScore > enemybotScore){
          result.style.fontSize = '2rem';
          result.innerText = 'You Won The Game'
          result.style.color = '#8d308d';
      }
      else if(JayrScore < enemybotScore){
          result.style.fontSize = '2rem';
          result.innerText = 'You Lost The Game';
          result.style.color = 'red';
      }
      else{
          result.style.fontSize = '2rem';
          result.innerText = 'Tie';
          result.style.color = 'green'
      }
      reloadBtn.innerText = 'Restart';
      reloadBtn.style.display = 'flex'
      reloadBtn.addEventListener('click',() => {
          window.location.reload();
      })
  }


  
playGame();  
}
game();