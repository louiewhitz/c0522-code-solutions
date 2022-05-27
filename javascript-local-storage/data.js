/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

function beforeUnload(event) {
  // event.preventDefault();
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
  if (previousTodosJSON !== null) {
    todos = JSON.parse(previousTodosJSON);
  }
}
window.addEventListener('beforeunload', beforeUnload);
