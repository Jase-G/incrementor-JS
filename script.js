// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var story = " Once upon a time, ";
var minus50Btn = document.getElementById("minus50");
var displayEl = document.getElementById("display");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus50Btn = document.getElementById("plus50");
var plus10Btn = document.getElementById("plus10");
var plus1Btn = document.getElementById("plus1");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");
var roundBtn4Inpt1 = document.getElementById("rand-in1");
var roundBtn4Inpt2 = document.getElementById("rand-in2");

//pic vars
var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");
//bottom button vars
var randSizeBtn = document.getElementById("random-size");
var randColorBtn = document.getElementById("random-rgb");
var resetPageBtn = document.getElementById("reset");

//event listener
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);
plus50Btn.addEventListener("click", plus50fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus1Btn.addEventListener("click", plus1fcn);
stringInEl.addEventListener("change", updateStory);

// initial variables
const initialColor = document.getElementById("HTML").style.background;
const initialFontSize = document.getElementById("body").style.fontSize;

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

//event function
function minus50fcn() {
  //update the value of the counter (JS)
  counter = counter - 50;

  //use the counter to update the website (HTML)
  displayEl.innerHTML = counter;
}

function minus10fcn() {
  //update counter
  counter -= 10; //same as counter = counter - 10;

  //update site
  displayEl.innerHTML = counter;
}

function minus1fcn() {
  //update counter
  //counter = counter -1 or
  //counter -= 1 or
  //counter -= 1; or
  counter--;

  //update website
  displayEl.innerHTML = counter;
}

function plus50fcn() {
  //update counter
  counter += 50;

  //update website
  displayEl.innerHTML = counter;
}

function plus10fcn() {
  //update counter
  counter += 10;

  //update website
  displayEl.innerHTML = counter;
}

function plus1fcn() {
  //update counter
  counter += 1;

  //update website
  displayEl.innerHTML = counter;
}

function updateStory() {
  //save the users word to a variable
  var word = stringInEl.value;

  //update the story variable (JS)
  story += word + " ";

  //clear input field
  stringInEl.value = "";

  //update the site to show story
  storyEl.innerHTML = story;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);

function round1() {
  //create random dec 0-1
  let rand = Math.random();

  //round tp 3 dec places
  rand = rand.toFixed(3);

  //update site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  //-5 to 5
  var rand = Math.random() * (5 - -5) + -5;
  console.log(rand);
  rand = Math.round(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function round4() {
  var num1 = +roundBtn4Inpt1.value;
  var num2 = +roundBtn4Inpt2.value;

  var rand = Math.random() * (num1 - num2) + num2;
  rand = Math.round(rand);
  document.getElementById("rand4-out").innerHTML = rand;
}

//random # from x to y
//Math.random() * (y - x) + x
//eg if i want a random # from 1 to 3:
//var rand = Math.random() * (3 - 1) + 1
//rand = Math.round(rand);

picBtn.addEventListener("click", addCandy);

function addCandy() {
  //every click, add another candy to the container
  picContainer.innerHTML += "<img width = '200px' src='images/aero bar.jpg'>";
}

randSizeBtn.addEventListener("click", randomSize);

function randomSize() {
  var body = document.getElementById("body");
  body.style.fontSize = Math.random() * 75 + "px";
}

randColorBtn.addEventListener("click", randomColor);

function randomColor() {
  var html = document.getElementById("HTML");

  var r = Math.random() * (0 - 255) + 255;
  var g = Math.random() * (0 - 255) + 255;
  var b = Math.random() * (0 - 255) + 255;

  html.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

resetPageBtn.addEventListener("click", resetPage);

function resetPage() {
  counter = 0;
  story = "Once upon a time, ";
  displayEl.innerHTML = "0";
  storyEl.innerHTML = "Once upon a time, ";

  var dash = "----------";
  var blank = "";
  document.getElementById("rand1-out").innerHTML = dash;
  document.getElementById("rand2-out").innerHTML = dash;
  document.getElementById("rand3-out").innerHTML = dash;
  document.getElementById("rand4-out").innerHTML = dash;

  roundBtn4Inpt1.value = blank;
  roundBtn4Inpt2.value = blank;

  document.getElementById("HTML").style.background = initialColor;
  document.getElementById("body").style.fontSize = initialFontSize;

  picContainer.innerHTML = "";
}

var toyPicContainer = document.getElementById("toy-container");
var toyBtn = document.getElementById("toy-btn");

toyBtn.addEventListener("click", addToy);

function addToy() {
  toyPicContainer.innerHTML +=
    "<img width = '200px' src='images/Millenium Falcon set.jpg'>";
}
// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 5. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

//6. create a button that when pressed adds an image of your favorite toy to the website.
//each click adds another toy.
