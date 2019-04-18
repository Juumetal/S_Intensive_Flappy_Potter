let cvs = document.querySelector('canvas')
let ctx = cvs.getContext('2d')
let background01 = document.querySelector('.game_background01')
let background02 = document.querySelector('.game_background02')
let characterImg01 = new Image()
characterImg01.src = "images/characterImg01.png"
let characterImg02 = new Image()
characterImg02.src = "images/characterImg02.png"
let characterImg03 = new Image()
characterImg03.src = "images/characterImg03.png"
let characterImg04 = new Image()
characterImg04.src = "images/characterImg04.png"
let characterImg05 = new Image()
characterImg05.src = "images/characterImg05.png"
let choice = characterImg01, timeout, temp2, gravitySpeed, gravityVelocity, isGameOver
let temp6, isMusicStart=0
let backgroundSpeed = parseInt(1)

function initBackground(){
  background01.style.left = '0px'
  background02.style.left = '1280px'

}

initBackground()

let temp8 =parseInt(0)
let temp7= parseInt(1280)
function moveBackgroundLeft(){
  moveBackground = setInterval(
    function(){
      temp8-=backgroundSpeed
      temp7-=backgroundSpeed
      background01.style.left = temp8 + 'px'
      background02.style.left = temp7 + 'px'
      if (temp8 <= -1280){
        background01.style.left = '1280px'
        temp8=1280
        background02.style.left = '0px'
        temp7=0
      }
      if (temp7 <= -1280){
        background02.style.left = '1280px'
        console.log('ALLO')
        temp7=1280
        background01.style.left = '0px'
        temp8=0
      }
    }, 75
  )
}

function drawCharacter(){
  ctx.drawImage(character.skin, character.posx, character.posy, character.width, character.height)
  requestAnimationFrame(drawCharacter)
}

document.addEventListener( // Jump on click
  'keypress',
  function(){
    if (isMusicStart==0){
      isMusicStart=1
      playHiSound()
    }

    if (isGameOver==0&&timeout==0){
      gravitySpeed = 0
      gravityVelocity = 0
      jump0 = setInterval(jump,jumpTime)
      clearInterval(gravity)
      cancelAnimationFrame(startGameRequest)
    }
    if (temp8==0){
      moveBackgroundLeft()
    }
  }
)

function jump(){
  if (timeout>=jumpLevitation){
    timeout = 0
    clearInterval(jump0)
  }
  else {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    character.posy -=jumpPower
    timeout += 1
  }
}



function gravity(){ // Gravity & Velocity
  if (gravitySpeed>-1) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    gravitySpeed = Math.floor(gravityVelocity+=0.40) // Power of the gravity
    character.posy += gravitySpeed
    if (gravityVelocity>20){
      gravityVelocity=20
    }
  }
}
naturalGravity = setInterval(gravity,20)

/*function startGame(){ // show gameOver
  ctx.font = '50px Helvetica';
  ctx.fillText('Click to start !', 500, 350)
  startGameRequest = requestAnimationFrame(startGame)
}*/

function debugText(){ // This function force the load of the font
  ctx.font = '0px invasion';
  ctx.fillText('.', -50, -50)
  requestAnimationFrame(debugText)
}

debugText()

function init(){
  isGameOver=0
  timeout=0
  gravitySpeed=-1
  score=0
  temp3=0
  temp4=0
  temp5=0
  temp6=0
  temp8=0
  temp7=1280
  backgroundSpeed = parseInt(1)
  let temp = localStorage.getItem('boughtItem')
  boughtItem = JSON.parse(temp)
  if (boughtItem==null){
    boughtItem=new Array(1,0,0,0,0)
  }
}

init()

class Element{
  constructor(skin,posX,posY,width,height){
    this.posx = posX
    this.posy = posY
    this.skin = skin
    this.width = width
    this.height = height
  }
}

let character = new Element(choice,250,322,75,75)

drawCharacter()
