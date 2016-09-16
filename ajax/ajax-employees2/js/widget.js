var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

// Rooms

var xhrRooms = new XMLHttpRequest();
xhrRooms.onreadystatechange = function () {
  if(xhrRooms.readyState === 4) {
    var rooms = JSON.parse(xhrRooms.responseText);
    console.log(rooms);
    var roomHTML = '<ul class="rooms">';   
    for (var i = 0; i < rooms.length; i++) {
      if(rooms[i].available === true) {
          roomHTML += '<li class="empty">'
      } else{
          roomHTML += '<li class="full">'
      }
      roomHTML += rooms[i].room;
      roomHTML += '</li>'
    };
    roomHTML += '</ul>'  
    document.getElementById('roomList').innerHTML = roomHTML; 
  }
};
xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.send();  