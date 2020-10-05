class Box2 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      console.log(this.body.speed)
      if(this.body.speed<3){
        display()
      }
      else{
        World.remove(world,this.body)
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        pop();
      }
    }
  }