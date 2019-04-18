let enemyImg01 = new Image()
enemyImg01.src = "images/enemyImg01.png"
let enemyImg02 = new Image()
enemyImg02.src = "images/enemyImg02.png"
let enemyImg03 = new Image()
enemyImg03.src = "images/enemyImg03.png"
let temp3 =0, enemy = new Array()

for (var i = 0; i < numberOfEnemies; i++) { //
  enemy.push(new Element(enemyImg01,10001 ,0,75,75))
  enemy.push(new Element(enemyImg02,10001 ,0,75,75))
  enemy.push(new Element(enemyImg03,10001 ,0,75,75))
}

function generatePosY(y){
  enemy[y].posy = Math.floor(Math.random()*645)
}

function generatePosYInit(){
  for (let i = 0; i < numberOfEnemies; i++) {
    enemy[i].posy = Math.floor(Math.random()*645)
  }
}

function drawAllEnemy(){
  for (let i = 0; i < numberOfEnemies; i++) {
    ctx.drawImage(enemy[i].skin, enemy[i].posx, enemy[i].posy, enemy[i].width, enemy[i].height)
  }
  requestAnimationFrame(drawAllEnemy)
}

moveEnemyLeft = setInterval ( // Enemy go to the left side
  function(){
    if (isGameOver==0 && gravitySpeed>-1){
      for (var i = 0; i < numberOfEnemies; i++) {
        if (enemy[i].posx<=10000){
          ctx.clearRect(0,0,canvas.width,canvas.height)
          enemy[i].posx-= enemySpeed
        }
        if (enemy[i].posx<=-75 && enemy[i].posx>=-500){
          enemy[i].posx=1280
          generatePosY(i)
        }
      }
    }
  }, enemyMoveEvery
)

spawnEnemy = setInterval( // Change enemy position
  function(){
    if (isGameOver==0 && gravitySpeed>-1){ // If the gravity is active, that mean the game started
      enemy[temp3].posx=1280
      temp3+=1
      if (temp3==numberOfEnemies){
        clearInterval(spawnEnemy)
        temp3=0
      }
    }
  }, spawnEnemyInterval
)
generatePosYInit()
drawAllEnemy()
