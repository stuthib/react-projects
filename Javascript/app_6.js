/*** ES6 and Classes ***/

/*
class Person extends PersonClass {
	constructor(){
		super();
	}
}
*/

//!! instanceof is used to check if an object is an instance of a prototype. This can be used on object methods.
var person = {
	greet: function(name) {
		return name;
	}
};

var stu = Object.create(person);
console.log(stu.greet('Stuthi')); // We can't use instanceof on person object.

function Person(name) {
	this.name = name;
}
var rj = new Person('RJ');
console.log(rj instanceof Person); // This uses the Person method which is an object.