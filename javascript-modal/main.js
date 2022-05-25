function openDialogue(event) {
  var confirm = document.querySelector('#confirm');
  confirm.style.display = 'block';
  var shadey = document.querySelector('#shade');
  shadey.style.display = 'block';
}

function closeDialogue(event) {
  var confirm = document.querySelector('#confirm');
  confirm.style.display = 'none';
  var shadey = document.querySelector('#shade');
  shadey.style.display = 'none';

}
window.addEventListener('load', function () {

  var button1 = document.querySelector('.modal');
  button1.addEventListener('click', openDialogue);
  var no = document.querySelector('.no-btn');
  no.addEventListener('click', closeDialogue);
}, false);
