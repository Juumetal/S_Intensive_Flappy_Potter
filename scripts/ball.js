let temp4=0, ball = new Array()
let ballImg = new Image()
ballImg.src = "images/ballImg.png"

for (var i = 0; i < numberOfBalls; i++) { //
  ball.push(new Element(ballImg,10001,0,102,42))
}

function generateBallPosY(y){
  ball[y].posy = Math.floor(Math.random()*645)
}

function generateBallPosYInit(){
  for (let i = 0; i < numberOfBalls; i++) {
    ball[i].posy = Math.floor(Math.random()*645)
  }
}

function drawAllBall(){
  for (let i = 0; i < numberOfBalls; i++) {
    ctx.drawImage(ball[i].skin, ball[i].posx, ball[i].posy, ball[i].width, ball[i].height)
  }
  requestAnimationFrame(drawAllBall)
}

moveBallLeft = setInterval ( // ball go to the left side
  function(){
    if (isGameOver==0 && gravitySpeed>-1){
      for (var i = 0; i < numberOfBalls; i++) {
        if (ball[i].posx<=10000){
          ctx.clearRect(0,0,canvas.width,canvas.height)
          ball[i].posx-=ballSpeed // ball Speed, default=7
        }
        if (ball[i].posx<=-75 && ball[i].posx>=-500){
          ball[i].posx=1280
          generateBallPosY(i)
        }
      }
    }
  }, ballMoveEvery
)




spawnBall = setInterval( // Change ball position
  function(){
    if (isGameOver==0 && gravitySpeed>-1){ // If the gravity is active, that mean the game started
      ball[temp4].posx=1280
      temp4+=1
      if (temp4==numberOfBalls){
        clearInterval(spawnBall)
        temp4=0
      }
    }
  }, spawnBallInterval
)
generateBallPosYInit()
drawAllBall()
