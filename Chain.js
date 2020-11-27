class Chain{
    constructor(objectA,objectB){
        this.objectA=objectA;
        this.objectB=objectB;
        var options={
            bodyA:objectA.body,
            bodyB:objectB.body,
            length:10,
            stiffness:0.06
        }  
        chain=Constraint.create(options);
        World.add(world, chain);   
    }

    display(){
        stroke("red");
        line(this.objectA.body.position.x,this.objectA.body.position.y,
            this.objectB.body.position.x,this.objectB.body.position.y);       
    }
}