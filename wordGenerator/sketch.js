//Word Generator GUI using p5.js
//Rob McCollough
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var fallingLetters = [];
var fallingWords = [];
var numLetters = 50;
var input;
var button;
var wordChecker;
var all_words;
var rainWords = false;
var wordFactory = new WordFactory();


//helper function to display border
function drawBorder(){
  strokeWeight(5);
  line(0,0, 800, 0);
  line(800, 0, 800, 600);
  line(800, 600, 0, 600);
  line(0, 600, 0, 0);
}

function generate(){
  wordFactory.loadPossibles(input.value());
  fallingWords = wordFactory.getWords(wordChecker);
  numLetters = fallingWords.length;
  //convert normal words to showFallingWords
  for(var i = 0; i < fallingWords.length; i++){
    fallingWords[i] = new FallingText(fallingWords[i]);
  }
  rainWords = true;
}

function preload(){
  //perform in preload to avoid asynch problems
  all_words = loadStrings('words_alpha.txt');
}

function setup(){
  createCanvas(800, 600);
  //load the array with letters
  for(var i = 0; i < numLetters; i++){
    var newChar = new FallingText(alphabet.charAt(random(26)));
    newChar.y = floor(random(600));
    fallingLetters.push(newChar);
  }
  //create static elements
  input = createInput('Enter some letters');
  button = createButton('Generate');
  button.mouseClicked(generate);

  //create global wordchecker
  wordChecker = new WordChecker(all_words);

}


function showStaticElements(){
  textAlign(CENTER);
  textFont('Monospace', 100);
  drawBorder();
  fill(0);
  text("Word", 400, 230);
  text("Generator", 400, 300);
  input.position(310,320);
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

//runs after first button click
function showFallingWords(){
  for(var i = 0; i < fallingWords.length; i++){
    fallingWords[i].show();
    fallingWords[i].update();

    //replace if gone offscreen
    if(fallingWords[i].y > 600){
        fallingWords[i] = new FallingText(fallingWords[i].letter);
    }
  }
}

function draw(){

  background(255);
  
  showStaticElements();
  if(!rainWords){
    showFallingLetters();
  }else{
    showFallingWords();
  }
}
