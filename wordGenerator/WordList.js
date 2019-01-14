class WordList{

  //built around underlying array
  constructor(list,x,y){
    this.numWords = list.length;
    this.list = list.sort();
    this.pos = createVector(x,y);
    this.range = {
      lower : 0 ,
      upper : this.numWords < 20 ? this.numWords : 20
    };
  }


  show(x, y){
    //upper left corner at x, y
    fill(255);
    noStroke();
    rect(this.pos.x, this.pos.y, 200, this.numWords*20 + 10);
    for(let i = this.range.lower; i < this.range.upper; i++){
      strokeWeight(1);
      fill(0);
      textAlign(LEFT);
      textSize(15);
      text(this.list[i], this.pos.x + 30, 20 + this.pos.y + i*20)
    }

  }
  onList(x, y){
    if( (x >= this.pos.x) && (x <= this.pos.x + 200) && (y >= this.pos.y) && (y <= this.pos.y + this.numWords*20 + 10)){
      return true;
    }else{
      return false;
    }
  }

  scroll(amount){
    if(this.numWords > 20){
      this.range.lower = this.range.lower - amount;
      constrain(this.range.lower, 0, this.range.lower - this.numWords);
      this.range.upper = this.range.upper + amount;
      constrain(this.range.upper, this.numWords - 19, this.numWords);
    }

  }







}
