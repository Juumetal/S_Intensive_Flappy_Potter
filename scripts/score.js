let scoreMax
let score = 0
let totalCoins = parseInt(localStorage.getItem('localTotalCoins'))
if (isNaN(totalCoins)){
  totalCoins=0
}

function saveScoreMax(){
  scoreMax = localStorage.getItem('localScoreMax')
  if (scoreMax<score) {
    scoreMax=score
    localStorage.setItem('localScoreMax', scoreMax)
  }
}

function saveTotalCoins(){
  score+=1
  checkLevel()
  if (totalCoins<999){ // Limit of budget
    totalCoins+=+1
  }
  drawScore()
  localStorage.setItem('localTotalCoins', totalCoins)
}

function drawTotalCoins(){
  ctx.font = '20px invasion';
  ctx.fillText(totalCoins, 50, 150);
  ctx.drawImage(ballImg, 85, 132)
  requestAnimationFrame(drawTotalCoins)
}

function drawScore(){
  ctx.font = '50px invasion';
  ctx.fillText(score, 620, 80);
  requestAnimationFrame(drawScore)
}

function drawScoreMax(){
  saveScoreMax()
  if (scoreMax>0){
  }
  else {
    scoreMax = 0
  }
  ctx.font = '22px invasion';
  ctx.fillText('Highest score : ' + scoreMax, 530, 120);
  requestAnimationFrame(drawScoreMax)
}

function startGame(){ // show gameOver
  ctx.font = '45px invasion';
  ctx.fillText('Press any key to start !', 400, 350)
  startGameRequest = requestAnimationFrame(startGame)
}

setTimeout(
  function(){
    drawTotalCoins()
    startGame()
    drawScore()
    drawScoreMax()
  }, 100
)

function checkLevel(){
  if(score<=5){
    ballSpeed = 4
    enemySpeed = 5
    backgroundSpeed = parseInt(1)
  }
  else if(score<=9){
    ballSpeed = 5
    enemySpeed = 6
    backgroundSpeed = parseInt(2)
  }
  else if(score<=14){
    ballSpeed = 6
    enemySpeed = 7
    backgroundSpeed = parseInt(3)
  }
  else if(score<=19){
    ballSpeed = 15
    enemySpeed = 5
    backgroundSpeed = parseInt(4)
  }
  else if(score<=24){
    ballSpeed = 7
    enemySpeed = 8
    backgroundSpeed = parseInt(5)
  }
}

function playHiSound(){
  let hiSound = new Audio("sounds/background_music.mp3");
  hiSound.play()
}


  // Show loading animation.
