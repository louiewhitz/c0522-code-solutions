var button1 = document.querySelector('.modal');
var no = document.querySelector('.no-btn');

function openDialogue(event) {
  var confirm = document.querySelector('.confirm'); // this used to be #confirm;
  confirm.style.display = 'block'; // very confused on how I should take the styling out of this
  var shadey = document.querySelector('.shade'); // this used to be #shade
  shadey.style.display = 'block'; // here too
}

function closeDialogue(event) {
  var confirm = document.querySelector('#confirm');
  confirm.style.display = 'none';
  var shadey = document.querySelector('#shade');
  shadey.style.display = 'none';

}

button1.addEventListener('click', openDialogue);
no.addEventListener('click', closeDialogue);
// window.addEventListener('load', function () {

//   button1.addEventListener('click', openDialogue);
//   var no = document.querySelector('.no-btn');
//   no.addEventListener('click', closeDialogue);
// }, false);
