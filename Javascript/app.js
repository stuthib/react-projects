function greetPerson(name) {
	var msg = 'Greetings ';
	var arr = [];
	for(var i = 0; i < name.length; i++)  {
		arr.push(
			(function(j){
				console.log(msg + name[j]);
			})(i)
		);
	}
	return arr;
}

var person = greetPerson(['Stuthi','RJ']);


function displayName(name) {
	console.log(arguments);
}

function getInput(name, displayName) {
	var name = 'RJ';
	displayName(name);
}

getInput('Stuthi', displayName);
