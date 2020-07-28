let numOfDrumsButtons = document.querySelectorAll(".drum").length;
const soundsNames = ['crash.mp3', 'kick-bass.mp3', 'snare.mp3', 'tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3'];

// Detecting Button press

for (let i = 0; i < numOfDrumsButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
      let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      addAnimation(buttonInnerHTML);
    });

};

// Detecting Keyboard press

document.addEventListener('keydown', function() {
  makeSound(event.key);
  addAnimation(event.key);
})


const makeSound = (key) => {
  switch (key) {
    case 'w':
      let audio1 = new Audio('sounds/crash.mp3');
      audio1.play();
      break;
    case "a":
      let audio2 = new Audio('sounds/kick-bass.mp3');
      audio2.play();
      break;
    case "s":
      let audio3 = new Audio('sounds/snare.mp3');
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio('sounds/tom-1.mp3');
      audio4.play();
      break;
    case "j":
      let audio5 = new Audio('sounds/tom-2.mp3');
      audio5.play();
      break;
    case "k":
      let audio6 = new Audio('sounds/tom-3.mp3');
      audio6.play();
      break;
    case "l":
      let audio7 = new Audio('sounds/tom-4.mp3');
      audio7.play();
      break;
  default:
    console.log(key);
    break;
  }
}

const addAnimation = (pressedKey) => {
  let drum = document.querySelector(`.${pressedKey}`);
  drum.classList.add("pressed");
  setTimeout(function (){drum.classList.toggle("pressed")}, 100);
}
