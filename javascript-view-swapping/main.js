// var $tabContainer = document.querySelector('.tab-container');
// var $tabNodelist = document.querySelectorAll('.tab');
// var $viewNodeList = document.querySelectorAll('.view');

// function checkClick(event) {
//   if (!event.target.matches('.tab')) {
//     return;
//     }
//     for (var i = 0; i < $tabNodelist.length; i++) {
//       var $activeTab = $tabNodelist[i];
//       if ($activeTab[i] === event.target) {
//      $activeTab[i].className = 'tab active';
//     } else {
//         $activeTab[i].className = 'tab';
//     }
//       var $viewName = event.target.getAttribute('data-view');
//       for (var i = 0; i < $viewNodeList.length; i++) {
//         if ($viewNodeList[i].getAttribute('data-view') !== $viewName) {
//         $viewNodeList[i].className = 'view hidden';
//     } else {
//         $viewNodeList[i].className = 'view';
//     }
//   }
// }

// $tabContainer.addEventListener('click', checkClick);
