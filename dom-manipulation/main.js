var clicks = 0;
var $hot = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function btnClick(event) {

  $clickCount.textContent = clicks++;
  if ($clickCount < 4) {
    $hot.className = 'hot-button cold';
  } else if ($clickCount < 7) {
    $hot.className = 'cool';
  } else if ($clickCount < 10) {
    $hot.className = 'hot-button tepid';
  } else if ($clickCount < 13) {
    $hot.className = 'hot-button warm';
  } else if ($clickCount < 16) {
    $hot.className = 'hot-button nuclear';
  }

}
$hot.addEventListener('click', btnClick);
