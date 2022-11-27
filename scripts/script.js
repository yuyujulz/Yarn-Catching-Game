
const game = document.getElementById('canvas');
ctx = canvas.getContext("2d");

//this.ctx.fillStyle = 'white';
//this.ctx.fillRect(340, 660, 150, 40)
const things = [];

class Basket{
    constructor(width,height, image, x){
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = 320; 
        this.speedX = 0;
        
        
    }

    drawBasket(){
        const image = new Image()
        image.src = 'https://www.pngkey.com/png/full/129-1298935_picnic-baskets-wicker-easter-transprent-png-free-washing.png';
        //fillRect(this.x, this.y, this.image, this.width, this.height)
        ctx.drawImage(image, this.x, 600, 100, 90 )
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
    updateBasket(){
        setInterval(() => {
            ctx.clearRect(0, 0, 744, 700)
            this.drawBasket()
            
        
        },20)
    }
}

const player = new Basket(200,200,100,100)
player.updateBasket()
player.basketMovement()

class FallingThings {
    constructor(minWidth, maxWidth){
        this.minWidth = 20;
        this.maxWidth = 734;
        this.x = Basket.this.x;
        this.minFrqnc = 50;
        this.maxFrqnc = 200;
    }
    
    obstacles(){       
        width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    
        frqnc = Math.floor(Math.random() * (maxFrqnc - minFrqnc + 1) + minFrqnc);
        
        things.push(new Basket(10, Basket.this.width, 'green', Basket.this.x, 0));
    }
}

//wool ball = https://banner2.cleanpng.com/20180420/cdq/kisspng-cat-play-and-toys-mouse-clip-art-toy-clipart-5ada6f8c464472.1066276015242648442878.jpg
//
//





//should be moving right and left only
/*function basket(){  

} 
//to randomise falling objects and its position
function random(min, max)  
{ 
    return Math.random() * (max-min) + min; 
} 
//should be random goodies
function goodies(){ 
 
} 
//left and right when pressing arrows
function movement(){

} 
//sgould count number of goodies by +1
function counting(){

}
//should count goodies missed
function health(){  

} 
//should show goodies cougth 
function score(){  

}










/*class catchingObjGame {
    constructor(ctx, bg, player){
        this.ctx = null;
        this.bg = null;
        this.player = null;
    }
    

    startGame(){
        const canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");

        const basket = new Basket(320, 640, 150, 60)
        this.player = basket;

        const background = new Image ();
        background.src = './images/shrine.jpg';

        background.onload = () => {
            this.bg = background;
            this.updateCanvas()
            this.drawPlayer()
        }
       
}

drawPlayer() {
    this.ctx.drawImage(
        this.player.img, 
        this.player.posX, 
        this.player.posY, 
        this.player.width, 
        this.player.height)
}

updateCanvas() {
    


}

}

class Basket {
    constructor(width,height, posX,posY) {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.img = this.createBasket()
    }

    createBasket() {
        const basket = new Image ()
        basket.src = 'https://images.app.goo.gl/Y3GYjBgc6Gqwfo2D6';
        ctx.drawImage(basket, 0, 0)
        //return basket
        //this.ctx.fillStyle = 'white';
        //this.ctx.fillRect(340, 660, 150, 40)
            //this.ctx.fillStyle = 'white'; 
    }
}

function moveRight(){
    
}
//images//
//let poop = new Image();
//baguette.src = ;

//let hairDrier = new Image();
//baguette.src = ;

//let snackies = new Image();
//baguette.src = ;

//let toy = new Image();
//baguette.src = ;

//sounds//
//width="744" height="700"//
//background//


//int position of a basket//


//falling objects//



/*window.onload = () => {
    document.getElementById('canvasbox').onclick = () => {
        const game = new catchingObjGame()
        catchingObjGame.startGame();
    };
};*/