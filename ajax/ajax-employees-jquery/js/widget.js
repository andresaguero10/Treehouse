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

$(document).ready(function () {
	var url = "data/employees.json";
	var callback = function (response) {
		var statusHTML = '<ul class="bulleted">';
		$.each(response, function (index, employee) {
			if(employee.inoffice == true) {
				statusHTML += '<li class="in">';				
			} else {
				statusHTML += '<li class="out">';
			}
			statusHTML += employee.name;
			statusHTML += '</li>';
		})
		statusHTML += '</ul>';
		$('#employeeList').html(statusHTML);
	}
	$.getJSON(url, callback);
}) //end ready PLACE SEMI COLON ERROR
