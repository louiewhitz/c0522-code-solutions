/* eslint-disable object-shorthand */
var $contactForm = document.querySelector('#contact-form');
// var names = document.forms[0].name;
// var email = document.forms[0].email;
// var message = document.forms[0].message;

function submit(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.email.value;
  var message = $contactForm.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log('message data', messageData);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', submit);
