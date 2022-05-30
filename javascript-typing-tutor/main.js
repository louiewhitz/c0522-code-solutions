var text = 'grumpy wizards make toxic brew';
var cursor = 0;
window.addEventListener('load', function () {
  loadPhrase();
});

function loadPhrase() {
  for (var i = 0; i < text.length; i++) {
    var input = document.querySelector('#input');
    var char = text.charAt(i);
    var span = document.createElement('span');
    span.innerHTML = char;
    input.appendChild(span);
  }
}

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (cursor === text.length) {
    if (confirm('Would you like to try again?')) {
      startOver();
    }
  } else {
    // var pressedKey = ` ${e.code}`;
    var pressedKey = String.fromCharCode(e.keyCode);
    pressedKey = pressedKey.toLowerCase();

    var allSpan = document.querySelectorAll('#input span');
    var cursorSpan = allSpan[cursor];
    var expectedChar = text.charAt(cursor);
    var nextChar = allSpan[cursor + 1];
    if (pressedKey === expectedChar) {
      cursorSpan.className = 'correct';
      cursor++;
      if (nextChar !== true) {
        nextChar.className = 'active';
      }
    } else {
      cursorSpan.className = 'incorrect';
    }
  }
}

function startOver() {
  cursor = 0;
  var allSpan = document.querySelectorAll('#input span');
  for (var i = 0; i < allSpan.length; i++) {
    var char = allSpan[i];
    char.className = '';
  }
}
