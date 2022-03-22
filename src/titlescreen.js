
document.addEventListener('DOMContentLoaded', () => {

  // open and close the readme


const readMe = document.getElementById('readMe');

function openRead () {
  readMe.style.display = 'flex';
  document.querySelector('.start-top').style.display = 'none';
  document.querySelector('.start-bottom').style.display = 'none';
  console.log('open')
}
  document.getElementById('readBtn').addEventListener('click', openRead);

  function closeRead () {
  readMe.style.display = 'none';
  document.querySelector('.start-top').style.display = 'flex';
  document.querySelector('.start-bottom').style.display = 'flex';

  console.log('close')
}
  document.getElementById('close-read').addEventListener('click', closeRead);



  // open game mode menu



  const gameModeMenu = document.getElementById('gm-Menu');
    // chooseGameMode();
  function openGmMenu () {
    gameModeMenu.style.display = 'flex';
    document.querySelector('.start-top').style.display = 'none';
    document.querySelector('.start-bottom').style.display = 'none';
    console.log('open')

    document.getElementById('additionButtonGm').addEventListener('click', chooseAddition);
    document.getElementById('subtractionButtonGm').addEventListener('click', chooseSubtraction);
    document.getElementById('divisionButtonGm').addEventListener('click', chooseDivision);
    document.getElementById('multiplicationButtonGm').addEventListener('click', chooseMultiplication);



  }
    document.getElementById('gm-button').addEventListener('click', openGmMenu);

    function closeGmMenu () {
    gameModeMenu.style.display = 'none';
    document.querySelector('.start-top').style.display = 'flex';
    document.querySelector('.start-bottom').style.display = 'flex';

    console.log('close')
  }
    document.getElementById('close-gm-menu').addEventListener('click', closeGmMenu);
    document.getElementById('additionButtonGm').addEventListener('click', closeGmMenu);
    document.getElementById('subtractionButtonGm').addEventListener('click', closeGmMenu);
    document.getElementById('divisionButtonGm').addEventListener('click', closeGmMenu);
    document.getElementById('multiplicationButtonGm').addEventListener('click', closeGmMenu);





 // open cheat sheet menu



 const cheatMenu = document.getElementById('cs-Menu');

 function openCsMenu () {
   cheatMenu.style.display = 'flex';
   document.querySelector('.start-top').style.display = 'none';
   document.querySelector('.start-bottom').style.display = 'none';
   console.log('open')
 }
   document.getElementById('cs-menu-button').addEventListener('click', openCsMenu);

   function closeCsMenu () {
   cheatMenu.style.display = 'none';
   document.querySelector('.start-top').style.display = 'flex';
   document.querySelector('.start-bottom').style.display = 'flex';

   console.log('close')
 }
   document.getElementById('close-cs-menu').addEventListener('click', closeCsMenu);




   // open addition cheat Sheet

   const cheatAddition = document.getElementById('cheatsheet-addition');

   function openAddition () {
     cheatAddition.style.display = 'flex';
     document.querySelector('.start-top').style.display = 'none';
     document.querySelector('.start-bottom').style.display = 'none';
     cheatMenu.style.display = 'none';
     console.log('open')
   }
     document.getElementById('additionButton').addEventListener('click', openAddition);

     function closeAddition () {
     cheatAddition.style.display = 'none';
     document.querySelector('.start-top').style.display = 'flex';
     document.querySelector('.start-bottom').style.display = 'flex';

     console.log('close')
   }
     document.getElementById('close-cheat-addition').addEventListener('click', closeAddition);





     // open subtraction cheat Sheet

     const cheatSubtraction = document.getElementById('cheatsheet-subtraction');

     function openSubtraction () {
       cheatSubtraction.style.display = 'flex';
       document.querySelector('.start-top').style.display = 'none';
       document.querySelector('.start-bottom').style.display = 'none';
       cheatMenu.style.display = 'none';
       console.log('open')
     }
       document.getElementById('subtractionButton').addEventListener('click', openSubtraction);

       function closeSubtraction () {
       cheatSubtraction.style.display = 'none';
       document.querySelector('.start-top').style.display = 'flex';
       document.querySelector('.start-bottom').style.display = 'flex';

       console.log('close')
     }
       document.getElementById('close-cheat-subtraction').addEventListener('click', closeSubtraction);



       // open multiplication cheat Sheet

       const cheatMultiplication = document.getElementById('cheatsheet-multiplication');

       function openMultiplication () {
         cheatMultiplication.style.display = 'flex';
         document.querySelector('.start-top').style.display = 'none';
         document.querySelector('.start-bottom').style.display = 'none';
         cheatMenu.style.display = 'none';
         console.log('open')
       }
         document.getElementById('multiplicationButton').addEventListener('click', openMultiplication);

         function closeMultiplication () {
         cheatMultiplication.style.display = 'none';
         document.querySelector('.start-top').style.display = 'flex';
         document.querySelector('.start-bottom').style.display = 'flex';

         console.log('close')
       }
         document.getElementById('close-cheat-multiplication').addEventListener('click', closeMultiplication);




         // open division cheat Sheet

         const cheatDivision = document.getElementById('cheatsheet-division');

         function openDivision () {
           cheatDivision.style.display = 'flex';
           document.querySelector('.start-top').style.display = 'none';
           document.querySelector('.start-bottom').style.display = 'none';
           cheatMenu.style.display = 'none';
           console.log('open')
         }
           document.getElementById('divisionButton').addEventListener('click', openDivision);

           function closeDivision () {
           cheatDivision.style.display = 'none';
           document.querySelector('.start-top').style.display = 'flex';
           document.querySelector('.start-bottom').style.display = 'flex';

           console.log('close')
         }
           document.getElementById('close-cheat-division').addEventListener('click', closeDivision);



})
