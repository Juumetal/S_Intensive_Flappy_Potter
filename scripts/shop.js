let moneyImg = new Image()
moneyImg.src = "images/moneyImg.png"
let shopBackgroundImg = new Image()
shopBackgroundImg.src = "images/shop.png"
let buttonImg = new Image()
buttonImg.src = "images/button.png"
let equipedImg = new Image()
equipedImg.src = "images/equiped.png"

let isShopOpen=parseInt(0)

let money = {
  posx : 50,
  posy : 50,
  width : 75,
  height : 75,
  skin : moneyImg
}

function drawMoney(){
  ctx.drawImage(money.skin, money.posx, money.posy, money.width, money.height)
  requestAnimationFrame(drawMoney)
}
drawMoney()

let mousePosX, mousePosY

function printMousePos(event) {
    mousePosX = event.clientX
    mousePosY = event.clientY
}

cvs.addEventListener(
  "click",
  function(){
    printMousePos(event)
    if (mousePosX >= money.posx &&
       mousePosX < money.posx + money.width &&
       mousePosY >= money.posy &&
       mousePosY < money.posy + money.height)
       {
         if (isShopOpen==0){
           isShopOpen=1
           drawShopBackground()
           drawShopCharacter01()
           drawShopCharacter02()
           drawShopCharacter03()
           drawShopCharacter04()
           drawShopCharacter05()
           drawShopButton01()
           drawShopButton02()
           drawShopButton03()
           drawShopButton04()
           drawShopButton05()
           if (equipedItem[1]==1){
             drawEquipedFrame02()
           }
           else if (equipedItem[2]==1){
             drawEquipedFrame03()
           }
           else if (equipedItem[3]==1){
             drawEquipedFrame04()
           }
           else if (equipedItem[4]==1){
             drawEquipedFrame05()
           }
           else{
             drawEquipedFrame01()
           }
           drawEquip01()
           if (boughtItem[1]==0){
             drawPrice02()
             drawBallForPrice02()
           }
           else {
             drawEquip02()
           }
           if (boughtItem[2]==0){
             drawPrice03()
             drawBallForPrice03()
           }
           else {
             drawEquip03()
           }
           if (boughtItem[3]==0){
             drawPrice04()
             drawBallForPrice04()
           }
           else {
             drawEquip04()
           }
           if (boughtItem[4]==0){
             drawPrice05()
             drawBallForPrice05()
           }
           else {
             drawEquip05()
           }
         }
         else{
           isShopOpen=0
           cancelAnimationFrame(shopBackgroundDrawRequest)
           cancelAnimationFrame(shopCharacter01DrawRequest)
           cancelAnimationFrame(shopCharacter02DrawRequest)
           cancelAnimationFrame(shopCharacter03DrawRequest)
           cancelAnimationFrame(shopCharacter04DrawRequest)
           cancelAnimationFrame(shopCharacter05DrawRequest)
           cancelAnimationFrame(shopButton01DrawRequest)
           cancelAnimationFrame(shopButton02DrawRequest)
           cancelAnimationFrame(shopButton03DrawRequest)
           cancelAnimationFrame(shopButton04DrawRequest)
           cancelAnimationFrame(shopButton05DrawRequest)
           cancelAnimationFrameEquipedFrame()
           ctx.clearRect(0,0,canvas.width,canvas.height);
           if (boughtItem[1]==0){
             cancelAnimationFrame(shopBallForPrice02DrawRequest)
             cancelAnimationFrame(shopPrice02DrawRequest)
           }
           else{
             cancelAnimationFrame(shopEquip02DrawRequest)
           }
           if (boughtItem[2]==0){
             cancelAnimationFrame(shopBallForPrice03DrawRequest)
             cancelAnimationFrame(shopPrice03DrawRequest)
           }
           else{
             cancelAnimationFrame(shopEquip03DrawRequest)
           }
           if (boughtItem[3]==0){
             cancelAnimationFrame(shopBallForPrice04DrawRequest)
             cancelAnimationFrame(shopPrice04DrawRequest)
           }
           else{
             cancelAnimationFrame(shopEquip04DrawRequest)
           }
           if (boughtItem[4]==0){
             cancelAnimationFrame(shopBallForPrice05DrawRequest)
             cancelAnimationFrame(shopPrice05DrawRequest)
           }
           else{
             cancelAnimationFrame(shopEquip05DrawRequest)
           }
           cancelAnimationFrame(shopEquip01DrawRequest)
         }
       }
  }
)

function drawShopBackground(){
  ctx.drawImage(shopBackgroundImg, 200, 100,1000,1000/1.777)
  shopBackgroundDrawRequest = requestAnimationFrame(drawShopBackground)
}
function drawShopCharacter01(){
  ctx.drawImage(characterImg01, 460, 180,75,75)
  shopCharacter01DrawRequest = requestAnimationFrame(drawShopCharacter01)
}
function drawShopButton01(){
  ctx.drawImage(buttonImg, 460-33, 180+120, 138, 40) // position x, y, width, height of the button
  shopButton01DrawRequest = requestAnimationFrame(drawShopButton01)
}
function drawShopCharacter02(){
  ctx.drawImage(characterImg02, 460+210*1, 180,75,75)
  shopCharacter02DrawRequest = requestAnimationFrame(drawShopCharacter02)
}
function drawShopButton02(){
  ctx.drawImage(buttonImg, 460+210*1-33, 180+120, 138, 40)
  shopButton02DrawRequest = requestAnimationFrame(drawShopButton02)
}
function drawShopCharacter03(){
  ctx.drawImage(characterImg03, 460+210*2, 180,75,75)
  shopCharacter03DrawRequest = requestAnimationFrame(drawShopCharacter03)
}
function drawShopButton03(){
  ctx.drawImage(buttonImg, 460+210*2-33, 180+120, 138, 40)
  shopButton03DrawRequest = requestAnimationFrame(drawShopButton03)
}
function drawShopCharacter04(){
  ctx.drawImage(characterImg04, 565, 420,75,75)
  shopCharacter04DrawRequest = requestAnimationFrame(drawShopCharacter04)
}
function drawShopButton04(){
  ctx.drawImage(buttonImg, 565-33, 420+120, 138, 40)
  shopButton04DrawRequest = requestAnimationFrame(drawShopButton04)
}
function drawShopCharacter05(){
  ctx.drawImage(characterImg05, 565+210, 420,75,75)
  shopCharacter05DrawRequest = requestAnimationFrame(drawShopCharacter05)
}
function drawShopButton05(){
  ctx.drawImage(buttonImg, 565+210*1-33, 420+120, 138, 40)
  shopButton05DrawRequest = requestAnimationFrame(drawShopButton05)
}

cvs.addEventListener(
  "click",
  function(){
    printMousePos(event)
    if (mousePosX >= 460-33 && // If we click on the 1st button
       mousePosX < 460-33 + 138 &&
       mousePosY >= 180+120 &&
       mousePosY < 180+120 + 40 && isShopOpen==1){
         choice = characterImg01
         // drawCharacter()
         cancelAnimationFrameEquipedFrame()
         for (let i = 0; i < 5; i++) {
           equipedItem[i]=0
         }
         equipedItem[0]=1
         drawEquipedFrame01()
         character = new Element(choice,250,322,75,75) // redraw the character with the right choice
    }
    else if (mousePosX >= 460+210*1-33 && // If we click on the 2nd button
       mousePosX < 460+210*1-33 + 138 &&
       mousePosY >= 180+120 &&
       mousePosY < 180+120 + 40 && isShopOpen==1){
         if (boughtItem[1]==0&&totalCoins>=shopPriceCharacter02){
           totalCoins-=shopPriceCharacter02
           boughtItem[1]=1
           cancelAnimationFrame(shopBallForPrice02DrawRequest)
           cancelAnimationFrame(shopPrice02DrawRequest)
           drawEquip02()
           localStorage.setItem('localTotalCoins', totalCoins)
           saveShopItem()
         }
         if (boughtItem[1]==1){
           choice = characterImg02
           cancelAnimationFrameEquipedFrame()
           for (let i = 0; i < 5; i++) {
             equipedItem[i]=0
           }
           equipedItem[1]=1
           drawEquipedFrame02()
           character = new Element(choice,250,322,75,75) // redraw the character with the right choice
         }
    }
    else if (mousePosX >= 460+210*2-33 && // If we click on the 3rd button
       mousePosX < 460+210*2-33 + 138 &&
       mousePosY >= 180+120 &&
       mousePosY < 180+120 + 40 && isShopOpen==1){
         if (boughtItem[2]==0&&totalCoins>=shopPriceCharacter03){
           totalCoins-=shopPriceCharacter03
           boughtItem[2]=1
           cancelAnimationFrame(shopBallForPrice03DrawRequest)
           cancelAnimationFrame(shopPrice03DrawRequest)
           drawEquip03()
           localStorage.setItem('localTotalCoins', totalCoins)
           saveShopItem()
         }
         if (boughtItem[2]==1){
           choice = characterImg03
           cancelAnimationFrameEquipedFrame()
           for (let i = 0; i < 5; i++) {
             equipedItem[i]=0
           }
           equipedItem[2]=1
           drawEquipedFrame03()
           character = new Element(choice,250,322,75,75) // redraw the character with the right choice
         }
    }
    else if (mousePosX >= 565-33 && // If we click on the 4th button
       mousePosX < 565-33 + 138 &&
       mousePosY >= 420+120 &&
       mousePosY < 420+120 + 40 && isShopOpen==1){
         if (boughtItem[3]==0&&totalCoins>=shopPriceCharacter04){
           totalCoins-=shopPriceCharacter04
           boughtItem[3]=1
           cancelAnimationFrame(shopBallForPrice04DrawRequest)
           cancelAnimationFrame(shopPrice04DrawRequest)
           drawEquip04()
           localStorage.setItem('localTotalCoins', totalCoins)
           saveShopItem()
         }
         if (boughtItem[3]==1){
           choice = characterImg04
           cancelAnimationFrameEquipedFrame()
           for (let i = 0; i < 5; i++) {
             equipedItem[i]=0
           }
           equipedItem[3]=1
           drawEquipedFrame04()
           character = new Element(choice,250,322,75,75) // redraw the character with the right choice
         }
    }
    else if (mousePosX >= 565+210*1-33-33 && // If we click on the 5th button
       mousePosX < 565+210*1-33-33 + 138 &&
       mousePosY >= 420+120 &&
       mousePosY < 420+120 + 40 && isShopOpen==1){
         if (boughtItem[4]==0&&totalCoins>=shopPriceCharacter05){
           totalCoins-=shopPriceCharacter05
           boughtItem[4]=1
           cancelAnimationFrame(shopBallForPrice05DrawRequest)
           cancelAnimationFrame(shopPrice05DrawRequest)
           drawEquip05()
           localStorage.setItem('localTotalCoins', totalCoins)
           saveShopItem()
         }
         if (boughtItem[4]==1){
           choice = characterImg05
           cancelAnimationFrameEquipedFrame()
           for (let i = 0; i < 5; i++) {
             equipedItem[i]=0
           }
           equipedItem[4]=1
           drawEquipedFrame05()
           character = new Element(choice,250,322,75,75) // redraw the character with the right choice
         }
    }
  }
)

let equipedItem = new Array(1,0,0,0,0)


function drawPrice02(){
  ctx.font = '22px invasion';
  ctx.fillText(shopPriceCharacter02, 460+210+10, 180+120+24);
  shopPrice02DrawRequest = requestAnimationFrame(drawPrice02)
}
function drawBallForPrice02(){
  ctx.drawImage(ballImg, 460+210+25, 180+120+10, 51, 21)
  shopBallForPrice02DrawRequest = requestAnimationFrame(drawBallForPrice02)
}

function drawPrice03(){
  ctx.font = '22px invasion';
  ctx.fillText(shopPriceCharacter03, 460+210*2+10, 180+120+24);
  shopPrice03DrawRequest = requestAnimationFrame(drawPrice03)
}
function drawBallForPrice03(){
  ctx.drawImage(ballImg, 460+210*2+25, 180+120+10, 51, 21)
  shopBallForPrice03DrawRequest = requestAnimationFrame(drawBallForPrice03)
}

function drawPrice04(){
  ctx.font = '22px invasion';
  ctx.fillText(shopPriceCharacter04, 565-10, 180+120+24+240);
  shopPrice04DrawRequest = requestAnimationFrame(drawPrice04)
}
function drawBallForPrice04(){
  ctx.drawImage(ballImg, 565+38, 180+120+10+240, 51, 21)
  shopBallForPrice04DrawRequest = requestAnimationFrame(drawBallForPrice04)
}

function drawPrice05(){
  ctx.font = '22px invasion';
  ctx.fillText(shopPriceCharacter05, 565+210-10, 180+120+24+240);
  shopPrice05DrawRequest = requestAnimationFrame(drawPrice05)
}
function drawBallForPrice05(){
  ctx.drawImage(ballImg, 565+38+210 , 180+120+10+240, 51, 21)
  shopBallForPrice05DrawRequest = requestAnimationFrame(drawBallForPrice05)
}




function drawEquip01(){
  ctx.font = '22px invasion';
  ctx.fillText('Equip', 460, 180+120+24);
  shopEquip01DrawRequest = requestAnimationFrame(drawEquip01)
}
function drawEquip02(){
  ctx.font = '22px invasion';
  ctx.fillText('Equip', 460+210*1, 180+120+24);
  shopEquip02DrawRequest = requestAnimationFrame(drawEquip02)
}
function drawEquip03(){
  ctx.font = '22px invasion';
  ctx.fillText('Equip', 460+210*2, 180+120+24);
  shopEquip03DrawRequest = requestAnimationFrame(drawEquip03)
}
function drawEquip04(){
  ctx.font = '22px invasion';
  ctx.fillText('Equip', 565, 180+120+240+25);
  shopEquip04DrawRequest = requestAnimationFrame(drawEquip04)
}
function drawEquip05(){
  ctx.font = '22px invasion';
  ctx.fillText('Equip', 565+210, 180+120+240+25);
  shopEquip05DrawRequest = requestAnimationFrame(drawEquip05)
}


function drawEquipedFrame01(){
  ctx.drawImage(equipedImg, 460-33, 180-34,138,138)
  shopEquipedFrame01DrawRequest = requestAnimationFrame(drawEquipedFrame01)
}

function drawEquipedFrame02(){
  ctx.drawImage(equipedImg, 460-34+210*1, 180-34,138,138)
  shopEquipedFrame02DrawRequest = requestAnimationFrame(drawEquipedFrame02)
}

function drawEquipedFrame03(){
  ctx.drawImage(equipedImg, 460-35+210*2, 180-34,138,138)
  shopEquipedFrame03DrawRequest = requestAnimationFrame(drawEquipedFrame03)
}
function drawEquipedFrame04(){
  ctx.drawImage(equipedImg, 565-33, 420-34,138,138)
  shopEquipedFrame04DrawRequest = requestAnimationFrame(drawEquipedFrame04)
}
function drawEquipedFrame05(){
  ctx.drawImage(equipedImg, 565-34+210, 420-34,138,138)
  shopEquipedFrame05DrawRequest = requestAnimationFrame(drawEquipedFrame05)
}

function cancelAnimationFrameEquipedFrame(){
  if (equipedItem[1]==1){
    cancelAnimationFrame(shopEquipedFrame02DrawRequest)
  }
  else if (equipedItem[2]==1){
    cancelAnimationFrame(shopEquipedFrame03DrawRequest)
  }
  else if (equipedItem[3]==1){
    cancelAnimationFrame(shopEquipedFrame04DrawRequest)
  }
  else if (equipedItem[4]==1){
    cancelAnimationFrame(shopEquipedFrame05DrawRequest)
  }
  else{
    cancelAnimationFrame(shopEquipedFrame01DrawRequest)
  }
}

function saveShopItem(){
  let temp = JSON.stringify(boughtItem)
  localStorage.setItem('boughtItem', temp)
}
