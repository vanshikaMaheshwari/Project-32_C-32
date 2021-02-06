class Box{
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        //restitution :0.4,
        friction :9,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.transparent = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    } else {
      World.remove(world,this.body);
      push();
      this.transparent = this.transparent - 5;
      tint(255,this.transparent);
      pop();
    }
  }
  score(){
    if(this.transparent < 0 && this.transparent > -105){
      score++
    }
  }
}