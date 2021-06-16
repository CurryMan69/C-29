class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.s1 = loadImage("sprites/sling1.png");
        this.s2 = loadImage("sprites/sling2.png");
        this.s3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1, 250,25)
        image(this.s2, 225,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8)
            if(pointA.x<250){
            strokeWeight(7);   
           line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y + 30);
           line(pointA.x + 20, pointA.y, pointB.x + 40, pointB.y + 30);
           image(this.s3, pointA.x - 20, pointA.y - 20, 15,50)
            } else {
                strokeWeight(4);   
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y + 30);
                line(pointA.x + 20, pointA.y, pointB.x + 40, pointB.y + 30);
                image(this.s3, pointA.x + 20, pointA.y - 20, 15,50);  



            }
           pop()
        
           
        }
    }
    
}