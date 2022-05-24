var light = document.querySelector('.light-bulb');
var bodies = document.querySelector('.on');
var clicks = false;
light.addEventListener('click', change);

function change(event) {

  if (clicks === true) {
    light.className = 'light-bulb on';
    bodies.className = 'on';
    clicks = false;
  } else if (clicks === false) {
    light.className = 'light-bulb off';
    bodies.className = 'off';
    clicks = true;
  }
}
// light.className.onlcick = 'light-bulb';
// light.text =  + clicks;
