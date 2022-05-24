var clicks = 0;
var $hot = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
$hot.addEventListener('click', btnClick);

function btnClick(event) {
  clicks++;
  var temp = null;
  if (clicks < 4) {
    temp = 'cold';
  } else if (clicks < 7) {
    temp = 'cool';
  } else if (clicks < 10) {
    temp = 'tepid';
  } else if (clicks < 13) {
    temp = 'warm';
  } else if (clicks < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hot.className = 'hot-button' + temp;
  $clickCount.textContent = 'Clicks:' + clicks;

  // $hot is target of event.target.className = 'hot-button ' + temp;
}
