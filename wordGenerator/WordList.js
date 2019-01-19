class WordList{


  //built around underlying array
  constructor(list,x,y){
    this.numWords = list.length;
    this.list = list.sort();
    this.pos = createVector(x,y);


    //create main list container
    this.container = createDiv();
    this.container.html('');
    this.container.class('mainContainer');
    console.log(this.container);
    this.container.id('mainContainer');


    if(this.numWords < 25){
      this.container.size(200, this.numWords * 20);
    }else{
      this.container.size(200, height-this.pos.y);
    }
    this.container.position(this.pos.x, this.pos.y);
    this.container.style('background-color:white; overflow:hidden; overflow-y:scroll; display:none;}');

    //create nav and list elt
    let nav = createElement('nav');
    let ul = createElement('ul');

    //populate ul with words
    for(let i = 0; i < this.numWords; i++){
      ul.child(createElement('li', this.list[i]));
    }

    //style ul
    ul.style('list-style-type: none;margin: 0;padding: 0;');

    //add nav to main container
    nav.child(ul);
    this.container.child(nav);
  }


  show(){
    this.container.show();
  }

}
