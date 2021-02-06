const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bckImg = "Background 8.jpg";

var engine, world;
var score = 0;

function preload(){
    getBackgroundImage();
    SmileImg = loadImage("Smile.png");
    Flower_Img = loadImage("Flower Background.png");
}

function setup(){
    createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    GROUND = new Ground(500,390,1000,20);

    Base_1 = new Ground(490,350,270,10);
    Base_2 = new Ground(800,180,190,10);

    //level 1 for the first set
    Block_1 = new Box(401,335,30,40);
    Block_2 = new Box(430,335,30,40);
    Block_3 = new Box(460,335,30,40);
    Block_4 = new Box(490,335,30,40);
    Block_5 = new Box(520,335,30,40);
    Block_6 = new Box(550,335,30,40);
    Block_7 = new Box(579,336,30,40);

    //level 2 for the first set
    Block_8 = new Box(430,315,30,40);
    Block_9 = new Box(460,315,30,40);
    Block_10 = new Box(490,315,30,40);
    Block_11 = new Box(520,315,30,40);
    Block_12 = new Box(550,315,30,40);

    // level 3 for the first set
    Block_13 = new Box(460,290,30,40);
    Block_14 = new Box(490,290,30,40);
    Block_15 = new Box(520,290,30,40);

    //level 4 for first set
    Block_16 = new Box(490,270,30,40);

    //level 1 for second set
    Block_17 = new Box(740,155,30,40);
    Block_18 = new Box(770,155,30,40);
    Block_19 = new Box(800,155,30,40);
    Block_20 = new Box(830,155,30,40);
    Block_21 = new Box(860,155,30,40);

    //level 2 for second set
    Block_22 = new Box(770,135,30,40);
    Block_23 = new Box(800,135,30,40);
    Block_24 = new Box(830,135,30,40);

    //level 3 for second set
    Block_25 = new Box(800,115,30,40);

    Ball = Bodies.circle(200,200,30);
    World.add(world,Ball);

    Connection = new Shot(Ball,{x:200,y:200});
}
function draw(){
    background(231, 21, 104);
    if(bckImg) 
    background(bckImg);
    Engine.update(engine);
    Flower = createSprite(500,200,1000,400);
    Flower.addImage(Flower_Img);
    drawSprites();

    fill(160, 4, 190);
    stroke(160, 4, 190);
    Base_1.display();
    Base_2.display();

    fill(255, 118, 210);
    stroke(0);
    Block_1.display();
    Block_2.display();
    Block_3.display();
    Block_4.display();
    Block_5.display();
    Block_6.display();
    Block_7.display();

    fill(107, 202, 240);
    stroke(0);
    Block_8.display();
    Block_9.display();
    Block_10.display();
    Block_11.display();
    Block_12.display();


    fill(134, 255, 76);
    stroke(0);
    Block_13.display();
    Block_14.display();
    Block_15.display();

    fill(247, 74, 103);
    stroke(0);
    Block_16.display();

    fill(255, 118, 210);
    stroke(0);
    Block_17.display();
    Block_18.display();
    Block_19.display();
    Block_20.display();
    Block_21.display();

    fill(107, 202, 240);
    stroke(0);
    Block_22.display();
    Block_23.display();
    Block_24.display();

    fill(134, 255, 76 );
    stroke(0);
    Block_25.display();
    Connection.display();

    imageMode(CENTER);
    image(SmileImg,Ball.position.x,Ball.position.y,70,45);

    GROUND.display();

    Block_1.score();
    Block_2.score();
    Block_3.score();
    Block_4.score();
    Block_5.score();
    Block_6.score();
    Block_7.score();
    Block_8.score();
    Block_9.score();
    Block_10.score();
    Block_11.score();
    Block_12.score();
    Block_13.score();
    Block_14.score();
    Block_15.score();
    Block_16.score();
    Block_17.score();
    Block_18.score();
    Block_19.score();
    Block_20.score();
    Block_21.score();
    Block_22.score();
    Block_23.score();
    Block_24.score();

    stroke(0);
    textSize(20)
    text("Drag the Smiley and release it, to launch it towards the blocks",20,20);
    fill(107,202,240)
    textSize(18);
    text("Press space to get a second chance to PLAY!!",20,370);
    text("SCORE : "+score,600,20);
}

function mouseDragged(){
    Matter.Body.setPosition(Ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    Connection.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Connection.attach(Ball);
    }
}
async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    var bg;
    console.log(hour);
    console.log(dateTime);
    if(hour >=06 && hour <=18){
      bg = "Background 8.jpg";
    }
    else{
      bg = "Background 9.jpg";
    }
  
    bckImg = loadImage(bg);
  }