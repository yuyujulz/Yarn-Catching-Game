
const game = document.getElementById('canvas');
ctx = canvas.getContext("2d");
let score = 0;
//const score = document.getElementsByClassName('score')

class Basket{
    constructor(width,height, image, x, y){
        this.width = width;
        this.height = height;
        this.image = basketImage;
        this.x = x; 
        this.y = y
        
        
    }

    draw(){
        
        ctx.drawImage(this.image, this.x, this.y, this.height, this.width)
    }
    left() {

        return this.x ;

      }

      right() {

        return this.x + this.width;

      }

      top() {

        return this.y;

      }

      bottom() {
        
        return this.y + this.height;

      }

      //check the collision with the obstacle

      crashWith(obstacle) {
        
        return !(this.left() < obstacle.right() &&
        this.right() > obstacle.left() &&
        this.top() < obstacle.bottom()&&
        this.bottom() > obstacle.top())
         
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
            if (this.x > 650) {
                this.x = 650;
                }
           
            break;
        }
       
      });
      
}
   
 

}
const basketImage = new Image()
basketImage.src = 'https://www.pngkey.com/png/full/129-1298935_picnic-baskets-wicker-easter-transprent-png-free-washing.png';

const player = new Basket(100,90,basketImage,100,600)
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
        things[i].draw();
        
    }
    if(frames % 120 === 0){
        let x = game.width;
        let minW = 20;
        let maxW = 730;
        let width = Math.floor(Math.random() * (maxW - minW + 1) + minW);
        things.push(new Basket(45, 45, drawFallingThings(), width - 20, 0))
    }
  
}

 
 function checkGameOver() {
    const crashed = things.some(function (obstacle) {
        
      return player.crashWith(obstacle);

    });

   

    if (crashed) {
    
      return score++
      

    } else {
        return score
    }

  }


function checkScore(){
    
    if (score < 0)
    {
        clearInterval(update(setInterval))
        ctx.font = ' 70px Comfortaa';
        ctx.fillStyle = 'black';
        ctx.fillText(`YOU LOSE!!! sad...`, 50, 300)
    }
}


  function scoring() {
    ctx.font = ' 20px Comfortaa';
    ctx.fillStyle = 'black';
    ctx.fillText(`Points: ${score}`, 20, 50);
  }

function update(){
    setInterval(() => {
        ctx.clearRect(0, 0, 744, 700)
        player.draw()
        updateFalling()
        checkGameOver()
        checkScore()
        scoring()
    },20)
}
