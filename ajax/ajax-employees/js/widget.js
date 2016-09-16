/*

1. Create an XMLHTTP Request Object
	var xhr = new XMLHttpRequest();

2. Create a callback function
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			
		}
	}
3. Open a request
	xhr.open('GET', 'data/employees.json');

4. Send the request 
	xhr.send();


PARSING JSON = JSON.parse(xhr.responseText)
*/

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class="bulleted">';
		for (var i = 0; i < employees.length; i++) {
			if(employees[i].inoffice == true) {
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
}

xhr.open('GET', 'data/employees.json');
xhr.send();