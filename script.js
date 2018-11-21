/**
 * Created by Tskulley on 11/21/2018.
 */
let point;
function setup() {
    var canvas = createCanvas(450, 280);
    canvas.parent('holder');
    background(184, 184, 194);
    point = new Point();
}
function draw(){
    point.show();
    point.keyPressed();
}

class Point{
    constructor(){
        this.x = width/2;
        this.y = height/2;
    }

    show(){
        push();
        ellipse(this.x,this.y, 6, 6);
        fill(200);
    }

    keyPressed() {
        if (keyCode === LEFT_ARROW) {
            this.x -= 1;
        } else if (keyCode === RIGHT_ARROW) {
            this.x += 1;
        }else if (keyCode === UP_ARROW) {
            this.y -= 1;
        }else if (keyCode === DOWN_ARROW) {
            this.y += 1;
        }else if(keyCode === 32){
            clear();
            this.x = width/2;
            this.y = height/2;
        }else if(keyCode === SHIFT){
            pop();
        }
    }
}