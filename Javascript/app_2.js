/*** this ***/

//!!When used in a function statement. Points to global window.

function a() {
	//console.log(this); //=> Window
}
a();

//!!When used in an expression. Points to global window.

var b = function() {
	var num = 2;
	//console.log(this); //=> Window
	function c() {
		//console.log(this); //=> Window
	}
	c();
}
b();

//!!When used in an object, it points to the object. But, when there is a function in a a function, in the object, it will point to the global window. It will create the variable name in the global namespace. To avoid that, assign this to another variable 'self' in the object function. 

var greet = {
	name: 'Hello',
	log: function() {
		var self = this;
		//console.log(self.name);
		function updateName() {
			self.name = 'Hai'
		}
		updateName();
		//console.log(self.name);
	}
};

greet.log();

/*** Arguments. New version is Spread, used ...other where other is the rest of the arguments. ***/

function data(name, profession) {
	name = name || 'Stuthi';
	profession = profession || 'dev';
	if(arguments.length === 0) {
		//console.log('No params');
		return;
	}
	//console.log(name);
	//console.log(profession);
	//console.log('-------------');
	//console.log(arguments);
	//console.log(arguments[0]);
}

data();
data('Stuthi');
data('Stuthi','Developer');

/*** Immediately Invoked Function Execition (IIFE) ***/
//!! The function is invoked when it is created and the value is present in greeting.
var greeting = function(name) {
	return 'Hello ' + name;
}('Stuthi');

console.log(greeting);

//!! This is a statement that is a function wrapped in (), so JS engine is tricked to execute it on the fly.

console.log((function(name) {
	var greeting = 'Good morning ' + name;
	return greeting;
}('Stuthi')));