

class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannon_base = loadImage("../assets/cannonBase.png")
        this.cannon_image = loadImage("../assets/canon.png")
    }

    display(){
        
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannon_image,0,0,this.width,this.height);
        pop();

        image(this.cannon_base,70,20,200,200);
       
        if(keyIsDown(RIGHT_ARROW) && this.angle < 52){
            this.angle += 1;
        }

        if(keyIsDown(LEFT_ARROW) && this.angle > -50){
            this.angle -= 1;
        }
        //console.log(this.angle);
    }
}

