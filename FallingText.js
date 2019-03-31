class FallingText{


  constructor(letter){
    this.letter = letter;
    this.x = floor(random(800));
    this.y = 0;
    this.size = floor(random(20,60));
    this.speed = floor(this.size * 0.1);    //bigger letters will fall faster
  }

  show(){
    textFont('Monospace', this.size);
    fill(0);
    text(this.letter, this.x, this.y);

  }

  update(){
    this.y += this.speed;
  }

}
