var userList = document.querySelector('#user-list');
function getUser(user) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < this.response.length; i++) {
      var li = document.createElement('li');
      li.textContent = xhr.response[i].name;

      userList.appendChild(li);
    }
  });
  xhr.send();
}

getUser(name);
