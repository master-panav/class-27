class chain{
constructor(bodyA,bodyB){
    var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.04,
        length : 10
        }
        this.chain2 = Constraint.create(options)
        World.add(world,this.chain2)
}

display(){
var pointA = this.chain2.bodyA.position;
var pointB = this.chain2.bodyB.position;

    strokeWeight(3);
    line (pointA.x,pointA.y,pointB.x,pointB.y)

}

}