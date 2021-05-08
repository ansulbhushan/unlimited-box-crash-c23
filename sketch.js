const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,box1,box2,box3,ground;




function setup(){
     creatCanvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;   
  
    

    box1=new Box(230,100,50,100);
    box2=new Box(200,200,50,100);
    box3=new Box(220,300,50,100)


    ground=new Ground(200,390,400,20);

    /*var options = {
      restitution:0.8
     }

     ball=Bodies.circle(200,100,25,options);
     World.add(world,ball);*/

}

function draw(){
    background(0);
  
    Engine.update(engine);
  

    /*ellipseMode (RADIUS);
    fill ("red");
    ellipse (ball.position.x,ball.position.y,25,25)*/

        box1.display();
        box2.display();
        box3.display();

        ground.display();
 
}

