// variables
let score = 5;
const scoreDisplay = document.getElementById('scoreDisplay');

let selector = 0;
const player = {
  top: 440,
  left: 380
};


const selectedChoice = document.getElementById('choice-selector');
const choice1 = document.getElementById('choice-1');
const choice2 = document.getElementById('choice-2');
const choice3 = document.getElementById('choice-3');
const choice4 = document.getElementById('choice-4');
const choice5 = document.getElementById('choice-5');
const choice6 = document.getElementById('choice-6');
const choice7 = document.getElementById('choice-7');
const choice8 = document.getElementById('choice-8');
const choice9 = document.getElementById('choice-9');
const timer = document.getElementById('timeDisplay');
const restart = document.getElementById('restart').addEventListener('click', () => {
  window.location.reload();
});

choice1.addEventListener('click', select1);
choice2.addEventListener('click', select2);
choice3.addEventListener('click', select3);

function select1 () {
selector = 1;
console.log(selector)
}

function select2 () {
selector = 2;
console.log(selector)
}

function select3 () {
selector = 3;
console.log(selector)
}

function displaySelected () {
  if (selector === 0) {
     selectedChoice.innerHTML = " ";
    // console.log('yasss queen');
  } else if (selector === 1) {
     selectedChoice.innerHTML = Enemies[0].array[0];
    // console.log('yasss queen');
  } else if (selector === 2) {
       selectedChoice.innerHTML = Enemies[0].array[1];
      // console.log('yasss queen');
    } else if (selector === 3) {
      selectedChoice.innerHTML = Enemies[0].array[2];
    }

}
displaySelected();

let shotsFired = [];



function changeSelectedArray () {
  for(let enemy = 0; enemy < Enemies.length; enemy++) {
  document.querySelector('.currentAnswerContainer').style.borderColor = Enemies[0].color;

  choice1.innerHTML = Enemies[0].array[0];
  choice2.innerHTML = Enemies[0].array[1];
  choice3.innerHTML = Enemies[0].array[2];

  if (Enemies.length === 0) {
  document.querySelector('.currentAnswerContainer').style.borderColor = 'black';
  document.getElementById('ac-1').style.borderColor = 'black';
  document.getElementById('ac-2').style.borderColor = 'black';
  choice4.innerHTML = '';
  choice5.innerHTML = '';
  choice6.innerHTML = '';
  choice7.innerHTML = '';
  choice8.innerHTML = '';
  choice9.innerHTML = '';
}
  if (Enemies.length === 1) {
  document.getElementById('ac-1').style.borderColor = 'black';
  document.getElementById('ac-2').style.borderColor = 'black';
  choice4.innerHTML = '';
  choice5.innerHTML = '';
  choice6.innerHTML = '';
  choice7.innerHTML = '';
  choice8.innerHTML = '';
  choice9.innerHTML = '';
}
  else if (Enemies.length === 2) {
  document.getElementById('ac-1').style.borderColor = Enemies[1].color;
  document.getElementById('ac-2').style.borderColor = 'black';
  choice4.innerHTML = Enemies[1].array[0];
  choice5.innerHTML = Enemies[1].array[1];
  choice6.innerHTML = Enemies[1].array[2];
  choice7.innerHTML = '';
  choice8.innerHTML = '';
  choice9.innerHTML = '';
} else if (Enemies.length === 3) {
  document.getElementById('ac-1').style.borderColor = Enemies[1].color;
  document.getElementById('ac-2').style.borderColor = Enemies[2].color;
  choice4.innerHTML = Enemies[1].array[0];
  choice5.innerHTML = Enemies[1].array[1];
  choice6.innerHTML = Enemies[1].array[2];
  choice7.innerHTML = Enemies[2].array[0];
  choice8.innerHTML = Enemies[2].array[1];
  choice9.innerHTML = Enemies[2].array[2 ];
}
}
}



  // move the player

  function movePlayer () {
    document.getElementById('player').style.left = player.left + "px";
  }

  // call movePlayer function with keyDown
document.onkeydown = function (e) {
  if (e.keyCode === 37 && timer.innerHTML > 0) {
    player.left = player.left - 15; movePlayer();
    // console.log(player.left);
  } else if (e.keyCode === 39 && timer.innerHTML > 0) {
    player.left = player.left + 15; movePlayer();
    // console.log(player.left)
  } else if (e.keyCode === 32 && timer.innerHTML > 0) {
    // create and play sound effect for laser
    const laserSounds = new Audio('sounds/laserSound.mp3');
    laserSounds.play();

    console.log(selectedChoice.innerHTML);
    shotsFired.push({
      left: player.left + 44,
      top: player.top
    }),
    drawLaser();
  } else if (e.keyCode === 13 && timer.innerHTML > 0) {
    alert("Game Paused")
    console.log(enemies);
  } else if (e.keyCode === 65 && timer.innerHTML > 0) {

    console.log(selectedChoice.innerHTML);
  } else if (e.keyCode === 67 && timer.innerHTML > 0) {
    selector = 1;
  } else if (e.keyCode === 86 && timer.innerHTML > 0) {
    selector = 2;
  } else if (e.keyCode === 66 && timer.innerHTML > 0) {
    selector = 3;
  } else if (e.keyCode === 16) {
    window.location.reload();
  }
  // redraw player if it goes off edge
  if (player.left > 1200) {
    player.left = 66;
  } else if (player.left < 75) {
    player.left = 1209;
  }
};




function collisionDetection () {
  for (let enemy = 0; enemy < Enemies.length; enemy += 1) {
    for (let laser = 0; laser < shotsFired.length; laser += 1) {
       let enemies = document.getElementById('enemies')
       // remove off screen laser
      if (shotsFired[laser].top < 5) {
        shotsFired.splice(laser, 1)
         // Enemies.splice(enemy, 1);
        // console.log(Enemies)
        // console.log(shotsFired[laser])
      }
      // remove offscreen enemeis for array

      if (Enemies.length > 0 && shotsFired.length > 0) {

      if (
      (shotsFired[laser].top <= Enemies[enemy].top + 84) &&
      (shotsFired[laser].top >= Enemies[enemy].top) &&
      (shotsFired[laser].left >= Enemies[enemy].left) &&
      (shotsFired[laser].left <= Enemies[enemy].left + 103) &&
      (selectedChoice.innerHTML == Enemies[0].answer)
      // (selector === 1)

      // (shotsFired[laser].top < 100)
    ) {
        Enemies.splice(enemy, 1);
        shotsFired.splice(laser, 1);
        score++;
        hits++;
        selector = 0;
        console.log(selector);
        scoreDisplay.textContent = score
        scoreDisplay.innerHTML = score
      }

}


    }
  }
}






// fire the weapn
function drawLaser () {
    document.getElementById('shotsfired').innerHTML = "";
    for (var laser = 0; laser < shotsFired.length; laser += 1) {
      document.getElementById('shotsfired').innerHTML +=
        `<div class='laser' style='left:${shotsFired[laser].left}px;
         top:${shotsFired[laser].top}px'></div>`;
      // console.log(shotsFired[laser]);
      //       console.log(player.left)
    }
  }
  function moveLaser () {
    for (var laser = 0; laser < shotsFired.length; laser += 1) {
      shotsFired[laser].top = shotsFired[laser].top - 50;
      // console.log('missile');

    }
  }

  // remove enemy that goes offscreen
  function deleteOffscreen () {
    if (Enemies.length > 0) {

    if (Enemies[0].top >= 525) {
      Enemies.splice(0, 1);
      misses++;
      console.log(misses);
    }
  }
}


  // create Enemies
   setInterval(createEnemy, 1000);
   setInterval(runTimer, 1000);

   function runTimer () {
      // run the timer
     if (timer.innerHTML > 0) {
       timer.innerHTML -= 1;
     }
     // clear enemies and lasers
     if (timer.innerHTML <= 0) {
       Enemies.length = 0;
       shotsFired.length = 0;
       document.getElementById('gameOver').style.display = 'flex';
     }



   }

function changeRandomNumber () {
  enemySelectorNum = Math.floor(Math.random() * chosenEnemies[0].length);
}

function checkHighScore () {
  if (score > localStorage.getItem('game1HighScore')) {
    localStorage.setItem('game1HighScore', score)
    highScore = score
    highScoreBoard.textContent = 'HIGH SCORE' + highScore
  }
}


// call functions
function gameLoop () {
    // chooseGameMode();
  if (timer.innerHTML > 0) {
  setTimeout(gameLoop, 50);
  // testing();
  changeSelectedArray();
  moveEnemy();
  moveLaser();
  collisionDetection();
  displaySelected();
  deleteOffscreen();
  changeRandomNumber();
  switchDifficulty();
  checkHighScore();
}
  drawEnemy();
  drawLaser();
  // checkGame()
}

function bla () {
  console.log(chosenEnemies);
}
bla()

document.addEventListener('DOMContentLoaded', () => {
gameLoop();
});
