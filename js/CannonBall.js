//Step 1 - Create class (constructor n display) ====>Step 2  - index.html
class CannonBall{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.r = 25;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("../assets/cannonball.png");
    }

    display(){
        var pos = this.body.position;
       
        push();

        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)

        pop();
    }

    //Step 7
    shoot(){
        var newAngle = cannon.angle-28;
        newAngle = newAngle * (3.14/180); // Explain conversion as formula 
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x: velocity.x * (180/3.14),y: velocity.y * (180/3.14) });
    }
}