var display = document.querySelector('.countdown-display');

var intervalId = null;
var count = 4;
setInterval(myFunc, 1000);

function myFunc() {
  count--;

  if (count > 0) {
    display.textContent = count;

  } else if (count === 0) {
    display.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);

  }
}

// for (var i = 4; i <= 0; i++) {

// if (countdown[i] === 0) {
//   countdown--;
//   console.log(countdown[i]);
// }
