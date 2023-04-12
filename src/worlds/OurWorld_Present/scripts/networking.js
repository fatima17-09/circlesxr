
const socket = io();

const playerId = socket.id;

const buttons = document.querySelectorAll('.roleButton');

//loop through the buttons and add a click event to each
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.id;
    socket.emit('buttonClicked', buttonId);
    console.log(`Button ${buttonId} clicked`);
  });
});

socket.on('destroyButton', (buttonId) => {
  console.log(`Destroying button ${buttonId}`);
  const button = document.getElementById(buttonId);
  if (button) {
    button.parentNode.removeChild(button);
  }
});


socket.on('win-screenA', (message)=> {
const winScreen = document.querySelector('#win-screenA');
const textEntity = winScreen.querySelector('#astronut-win');
textEntity.setAttribute('text', 'value', message);
winScreen.setAttribute('visible', true);
});

socket.on('win-screenS', (message)=> {
const winScreen = document.querySelector('#win-screenS');
const textEntity = winScreen.querySelector('#scientist-win');
textEntity.setAttribute('text', 'value', message);
winScreen.setAttribute('visible', true);
});

socket.on('win-screenM', (message)=> {
const winScreen = document.querySelector('#win-screenM');
const textEntity = winScreen.querySelector('#mechanic-win');
textEntity.setAttribute('text', 'value', message);
winScreen.setAttribute('visible', true);
});


/* TRIAL
    socket.on('taskProgression', (role) => {

      console.log("we  enter the loop");
      let gameControl = document.getElementById(gameController);
      if (role == "astronaut") {
        let toDoListItem = document.getElementById(astronautTask);

        toDoListItem.setAttribute("text", { value: "Completed: A̶l̶i̶g̶n̶ ̶S̶h̶u̶t̶t̶l̶e̶ ̶f̶o̶r̶ ̶L̶a̶n̶d̶i̶n̶g̶" });
        gameControl.setAttribute("astronaut", "progress");
      }
      if (role == "scientist") {
        let toDoListItem = document.getElementById(scientistTask);
        toDoListItem.setAttribute("text", { value: "Completed: A̶d̶j̶u̶s̶t̶ ̶T̶e̶m̶p̶e̶r̶a̶t̶u̶r̶e̶" });
        gameControl.setAttribute("astronaut", "progress");
      }
      if (role == "mechanic") {
        let toDoListItem = document.getElementById(mechanicTask);
        toDoListItem.setAttribute("text", { value: "Completed: F̶i̶x̶ ̶t̶h̶e̶ ̶W̶i̶r̶e̶s̶" });
        gameControl.setAttribute("astronaut", "progress");
      }

      socket.emit('taskCompleted');

    });
 */