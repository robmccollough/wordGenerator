//Word Generator GUI using p5.js
//Rob McCollough
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var fallingLetters = [];
var numLetters = 50;
var input;
var button;
var wordChecker;
var all_words;
var showList = false;
var wordFactory = new WordFactory();
let wordList;


//helper function to display border
function drawBorder(){

}

function generate(){
  wordFactory.loadPossibles(input.value());

  //clear html and make new list if its been clicked
  if(showList){
  var previous = document.getElementById('mainContainer');
  previous.parentNode.removeChild(previous);
  }

  wordList = new WordList(wordFactory.getWords(wordChecker), 310, 225);
  showList = true;
}

function preload(){
  //perform in preload to avoid asynch problems
  all_words = loadStrings('words_alpha.txt');
}

function setup(){

  var canv = createCanvas(800, 600);
  canv.style('border-style:solid;border-width:5px;');

  //load the array with letters
  for(var i = 0; i < numLetters; i++){
    var newChar = new FallingText(alphabet.charAt(random(26)));
    newChar.y = floor(random(600));
    fallingLetters.push(newChar);
  }
  //create static elements
  input = createInput('Enter some letters');
  input.mouseClicked(function cl(){input.value('');});
  button = createButton('Generate');
  button.mouseClicked(generate);

  //create global wordchecker
  wordChecker = new WordChecker(all_words);

}


function showStaticElements(x, y){
  textAlign(CENTER);
  textFont('Monospace', 100);
  fill(0);
  text("Word", x , y - 40);
  text("Generator", x, y + 35);
  input.position(x - 90 , y + 50);
  button.position(input.x + input.width, input.y);

}

//runs at start
function showFallingLetters(){

  for(var i = 0; i < numLetters; i++){
    fallingLetters[i].show();
    fallingLetters[i].update();

    //replace if gone offscreen
    if(fallingLetters[i].y > 820){
        fallingLetters[i] = new FallingText(alphabet.charAt(random(26)));
    }
  }
}

function draw(){

  background(255);
  showFallingLetters();
  drawBorder();

  //display list only after first click
  if(showList){
      showStaticElements(400, 150);
      wordList.show();
  }else{
      showStaticElements(400,300);
  }
}
  // function mouseWheel(event){
  //   if(showList && wordList.onList(mouseX,mouseY)){
  //     wordList.scroll(event.delta);
  //   }
  // }

  //runs after first button click
  // function showFallingWords(){
  //   for(var i = 0; i < fallingWords.length; i++){
  //     fallingWords[i].show();
  //     fallingWords[i].update();
  //
  //     //replace if gone offscreen
  //     if(fallingWords[i].y > 600){
  //         fallingWords[i] = new FallingText(fallingWords[i].letter);
  //     }
  //   }
  // }
