var button1 = document.querySelector('.modal');
var no = document.querySelector('.no-btn');

function openDialogue(event) {
  var confirm = document.querySelector('#confirm'); // this used to be #confirm;
  confirm.className = 'visible';
  var shadey = document.querySelector('#shade'); // this used to be #shade
  shadey.className = 'visible';
}

function closeDialogue(event) {
  var confirm = document.querySelector('#confirm');
  confirm.className = 'non-visible';
  var shadey = document.querySelector('#shade');
  shadey.className = 'non-visible';

}

button1.addEventListener('click', openDialogue);
no.addEventListener('click', closeDialogue);
