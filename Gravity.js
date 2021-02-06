class Gravity{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.gravity = Constraint.create(options);
        World.add(world, this.gravity);
    }
    fly(){
        this.gravity.bodyA=null
    }

    display(){
        if(this.gravity.bodyA){
        var pointA = this.gravity.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}