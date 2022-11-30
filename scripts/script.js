
const game = document.getElementById('canvas');
ctx = canvas.getContext("2d");

//const score = document.getElementsByClassName('score')

class Basket{
    constructor(width,height, image, x, y){
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = x; 
        this.y = y
        
        
    }

    drawBasket(){
        const image = new Image()
        image.src = 'https://www.pngkey.com/png/full/129-1298935_picnic-baskets-wicker-easter-transprent-png-free-washing.png';
        ctx.drawImage(image, this.x, 600, 100, 90 )
    }
    drawObstacle(){
        ctx.drawImage(this.image, this.x, this.y, this.height, this.width)
    }
    
    basketMovement(){
    

      document.addEventListener('keydown', (event) => {

        switch (event.keyCode) {       
    
            case 37: 
            
            player.x -= 20;
            if (this.x < 0) {
                this.x = 0;
                }
            
            break;
    
            case 39: 
            
            player.x += 20
            if (this.x > 630) {
                this.x = 630;
                }
           
            break;
        }
       console.log(player.x)
      });
}
   
  /*   crashWith(obstacle) {
    return !(this.bottom() < toy.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
}
   */ 

}

const player = new Basket(200,200,100,320)
update()
player.basketMovement()



const things = [];

function drawFallingThings(){
    const toy = new Image()
    toy.src = 'https://pic.onlinewebfonts.com/svg/img_74278.png';
    //ctx.drawImage(toy, 100, 300, 100, 100)
    return toy
}
drawFallingThings()


let frames = 0;
function updateFalling(){
    frames++
    for(let i = 0; i < things.length; i++ ){
        things[i].y += 1 ;
        things[i].drawObstacle();
        console.log(things)
    }
    if(frames % 120 === 0){
        let x = game.width;
        let minW = 20;
        let maxW = 730;
        let width = Math.floor(Math.random() * (maxW - minW + 1) + minW);
        things.push(new Basket(40, 40, drawFallingThings(), width, 0))
    }
  
}
function checkCollision(){
    let score = 0;
    if(player.image.y + player.image.height >= toy.y ||
    player.image.y <= toy.y + toy.height
    ){
        return true
    } else {
        return false
    }
}  
function stopGame (){
    clearInterval(update())
}


function update(){
    setInterval(() => {
        ctx.clearRect(0, 0, 744, 700)
        player.drawBasket()
        //drawFallingThings()
        updateFalling()
        //checkCollision()
    },20)
}
