var $tabContainer = document.querySelector('.tab-container');
var $tabNodelist = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

function checkClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabNodelist.length; i++) {
    var $activeTab = $tabNodelist[i];
    if ($activeTab === event.target) {
      $activeTab.className = 'tab active';
    } else {
      $activeTab.className = 'tab';
    }
  }
  var $viewName = event.target.getAttribute('data-view');
  for (var j = 0; j < $viewNodeList.length; j++) {
    if ($viewNodeList[j].getAttribute('data-view') !== $viewName) {
      $viewNodeList[j].className = 'view hidden';
    } else {
      $viewNodeList[j].className = 'view';
    }
  }
}

$tabContainer.addEventListener('click', checkClick);
