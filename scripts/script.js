

class catchingObjGame {
    constructor(){
        this.ctx = null;
        this.bg = null;
    }

    startGame(){
        const canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");

        const background = new Image ();
        background.src = './iron-hack-project/images/shrine.jpg';

        background.onload = () => {
            this.bg = background;
        }
}

updateCanvas() {
    this.ctx.drawImage(this.bg, 0, 0, )


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



window.onload = () => {
    document.getElementById('start-button').onClick = () => {
        const game = new catchingObjGame()
        game.startGame();
    };
};