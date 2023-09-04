
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', onStart); 
function onStart() {
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
        }, 1000)
    btnStart.setAttribute('disabled', 'true');
    btnStop.removeAttribute('disabled');
};
 
btnStop.addEventListener('click', onStop);
function onStop() {
    clearInterval(timerId);
    btnStop.setAttribute('disabled', 'true');
    btnStart.removeAttribute('disabled');
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}














// const btnStart = document.querySelector('button[data-start]');
// const btnStop = document.querySelector('button[data-stop]');

// btnStart.addEventListener('click', onStart); 
// function onStart() {
//     timerId = setInterval(() => {
//         const randomColor = getRandomHexColor();
//         document.body.style.backgroundColor = randomColor;
//         }, 1000)
//      btnStart.setAttribute('disabled', '');
// };
 
// btnStop.addEventListener('click', onStop);
// function onStop() {
//     clearInterval(timerId);
//     btnStop.setAttribute('disabled', '');
// };


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }




// const btnStart = document.querySelector('button[data-start]');
// const btnStop = document.querySelector('button[data-stop]');
// let timerId = null; 

// btnStart.addEventListener('click', startColor); 
// btnStop.addEventListener('click', stopColor);
// function startColor() {
//     btnStart.disabled = true;
//     timerId = setInterval(changeBackgroundColor, 1000);
//    };
 

// function stopColor() {
//     btnStart.disabled = false;
//     clearInterval(timerId);
//     };

// function changeBackgroundColor() {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
// }    

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }