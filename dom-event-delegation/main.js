var $tasklist = document.querySelector('.task-list');

function oneClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.name;', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', $taskListItem);
    $taskListItem.remove();
  }

}
$tasklist.addEventListener('click', oneClick);
