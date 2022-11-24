
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext("2d");

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
class fallingObj {
    constructor(x, y, ){
        this.x = x;
        this.y = y;
    }

y = Math.floor(Math.random()*744)

draw(x,y) {
    ctx.clearRect(x, y, 744, 700);
    if(y > 700){
        y = 0
    }
    ctx.fillStyle = 'white';
    ctx.fillRect(0, y, 50, 50);
    y += 3;
    setTimeout(`draw(${x},${y})`, 30);
}

update(){
    this.draw()

}
}
//basket//

/*const basket = {
    x: 372,
    y: 650,
    width: 100,
    hegth: 35,
    moveLeft: function() {
        this.x -= 30
      },
      moveRight: function() {
        this.x += 30
      }
}
*/
