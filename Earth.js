class Earth{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }

        this.body = Bodies.rectangle(x,y,25,25,options)
        this.width = 25
        this.height = 25
        this.Visiblity = 255
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        if(this.body.speed > 1){
        World.remove(world,this.body)
        push()   
        this.Visiblity = this.Visiblity-5
        tint(255,this.Visiblity);
        rect(0,0,this.width,this.height)
        pop()
        }
        else{
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
        }
}
}