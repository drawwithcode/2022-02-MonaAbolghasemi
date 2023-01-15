
let myCharacters = []; //to hold the instances of the class Character
let x = 0;
let y = 0;


function setup() {
  background("black");
  createCanvas(windowWidth, windowHeight);
  addCharacter(); 
 }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //this makes the canvas responsive
}

function mouseClicked() {
  //each time a mouse click happens, 10 instances will be created with random letters and color and position 
  for (let i = 0; i < 10; i++) {
    addCharacter();
  }
}

function draw() {
  background(0, 0, 0, 15); 
  var myText = "Click as much as you want :)";
  
  textFont("Noto Sans Display");
  textAlign(CENTER);
  textSize(15);
  fill(200);
  text(myText, width/2, height/6);
  //the loop gets all the instances kpt in the array and runs them so that they will be displayed
  for (let i = 0; i < myCharacters.length; i++) {
    myCharacters[i].run();
  }

  //after each 10 frames, one instance will be removed from the array
  //this makes the last created character disapear from the screens
  if(frameCount % 10 == 0){
   
      myCharacters.pop();
  }

}

function addCharacter() {
  //the function creates an instance of the class with random values
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = Math.floor(random(0, alphabet.length)); //to get a random index from the string above
  let myText = alphabet[index];
  const r = random(255),
    g = random(255),
    b = random(255);
  const charColor = color(r, g, b);
  //creating a new instance:
  const aNewCharacter = new Character(
    myText,
    random(windowWidth),
    random(windowHeight),
    30,
    charColor
  );
  //adding to the array of characters:
  myCharacters.push(aNewCharacter);
}

//defining a class for a character of alphabets:
class Character {
  //the class constructor get the text(a letter of alphabet), size, position and color as initial values
  constructor(tmpText, tmpX, tmpY, tmpSize, tmpColor) {
    this.txt = tmpText;
    this.x = tmpX;
    this.y = tmpY;
    this.size = tmpSize;
    this.color = tmpColor;
  }
// thre method display() creates a text with using the font, size and position of the text
  display() {
    push();
    fill(this.color);
    textFont("Bebas Neue");
    textSize(this.size);
    text(this.txt, this.x, this.y);
    pop();
  }
//the method of updatePosition makes the letters move randomly on the screen
  updatePosition() {
    this.x += random(0, 2);
    this.y += random(-2, 2);
  }
// method run() calls the methods diplay() and updatePosiyion()
  run() {
    this.updatePosition();
    this.display();
  }
}
