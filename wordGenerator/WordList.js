class WordList{

  //built around underlying array
  constructor(list,x,y){
    this.list = list;
    this.pos = createVector(x,y);
  }




  show(x, y){
    //upper right corner at x, y
    for(let i = 0; i < this.list.length; i++){
      strokeWeight(1);
      fill(0);
      textSize(15);
      text(this.list[i], this.pos.x + 15, 15 + this.pos.y + i*20)
    }

  }


  scroll(){


  }







}
