
var names = document.forms[0].name;
var email = document.forms[0].email;
var message = document.forms[0].message;

function handleFocus(event) {
  console.log('The "focus" event has fired');
  console.log(event.target.name);

}

function handleBlur(event) {
  console.log('The "blur" event has fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('The "input" event has fired');
  console.log(event.target.name, event.target.value);
}

names.addEventListener('focus', handleFocus);
names.addEventListener('blur', handleBlur);
names.addEventListener('input', handleInput);

email.addEventListener('input', handleInput);
email.addEventListener('blur', handleBlur);
email.addEventListener('focus', handleFocus);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
