/*** call, apply and bind ***/

var person = {
	firstName: 'Stuthi',
	lastName: 'Balaji',
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
}

var fn = function(lan1, lan2) {
	console.log(this.getFullName());
	console.log(lan1);
	console.log(lan2);
}; // bind creates a copy of the functions and creates a reference of the person object to it.
//!! call and apply do the same job but invoke the functions.

var bindFn = fn.bind(person);

bindFn(); // Stuthi Balaji undefined undefined

//!! call and apply would be used the same way, but invoked.
//!! call will take arguments, and apply will take it as array. The first argument is 'this', which is 'person'.

var callFn = fn.call(person, 'en', 'es'); //Stuthi Balaji en es
var applyFn = fn.apply(person, ['en', 'es']); //Stuthi Balaji en es