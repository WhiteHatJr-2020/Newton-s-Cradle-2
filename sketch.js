const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;


function setup() 
{
    canvas=createCanvas(windowWidth / 2, windowHeight / 1.5);
    engine = Engine.create();
    world = engine.world;
    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options=
    {
      mouse:canvasmouse
    };
    mConstraint=MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
    pendullum1 = new Pendullum(140, 550, "red");
    sling1 = new Sling(pendullum1.body, { x: 140, y: 50 });
    pendullum2 = new Pendullum(190, 450, "yellow");
    sling2 = new Sling(pendullum2.body, { x: 190, y: 50 });

    pendullum3 = new Pendullum(240, 450, "orange");
    sling3 = new Sling(pendullum3.body, { x: 240, y: 50 });
    pendullum4 = new Pendullum(290, 450, "blue");
    sling4 = new Sling(pendullum4.body, { x: 290, y: 50 });
  }
  
  function draw() 
  {
    background(0);
    Engine.update(engine);
    pendullum1.display();
    sling1.display();
    pendullum2.display();
    sling2.display();
    pendullum3.display();
    sling3.display();
    pendullum4.display();
    sling4.display();
  }
  
  
  function mouseDragged() 
  {
    Matter.Body.setPosition(pendullum1.body, { x: mouseX, y: mouseY });
  }