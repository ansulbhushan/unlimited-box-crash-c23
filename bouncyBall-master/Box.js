class Box{

    //properties
constructor(x,y,width,height){
    
var options={
    restitution: 0.9
    }
    this.body=Bodies.rectangle (x,y,width,height,options);
   this.width=width;
    this.height=height;
    World.add(world,this.body);
}

display(){

    var pos =this.body.position;
    rectMode (CENTER);
    //border
    strokeWeight(9);
    stroke ("brown");
    fill ("yellow");
    rect (pos.x,pos.y,this.width,this.height);
}

}