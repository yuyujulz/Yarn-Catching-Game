

class catchingObjGame {
    constructor(){
        this.ctx = null;
        this.bg = null;
        this.player = null;
    }

    startGame(){
        const canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");

        const basket = new Basket()

        const background = new Image ();
        background.src = './iron-hack-project/images/shrine.jpg';

        background.onload = () => {
            this.bg = background;
            this.updateCanvas()
        }
}

updateCanvas() {
    this.ctx.drawImage(this.bg, 0, 0, 744, 700 )


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
       // const basket = new Image ()
        //basket.src = '';
        //return basket
        ctx.fillRect(320, 640, 150, 60) 
        ctx.fillStyle = 'white';      
    }
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
    document.getElementById('start-button').onclick = () => {
        const game = new catchingObjGame()
        game.startGame();
    };
};*/