/*** Functional Programming ***/

function mapForEach(arr, fn) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

var arr1 = [1,2,3];

var mult = mapForEach(arr1, function(item){
	return item * 2;
});

//console.log(mult);


/*** Objects and 'new' ***/
//Create a new object.

function Person(firstname, lastname) {
	this.firstName = firstname;
	this.lastName = lastname;
	//console.log(this.firstName + ' ' + this.lastName);
}

var stu = new Person('Stuthi', 'Balaji'); //Creates new memory for the object person and 'this' points to the new object. It sets this.firstName and this.lastName.
//console.log(stu);

//Adding  property and methods to object prototype. These are function constructors.
Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
}

//console.log(stu.getFullName());

//new creates an object.

var a = new Number(3); // calls the Number function and returns an object.
var b = 3;
//console.log(a == b); //true
//console.log(a === b); //false

//to convert a string to number

var c = Number("3"); // We don't use the 'new' operator in this case.
//console.log(c); // 3

/*** Prototypal Inheritance ***/
// Create an object which is the prototype. Pass that as a constructor to Object.create method.Set the properties on that object and use it.

var company = {
	name: 'default',
	type: 'default',
	info: function() {
		return this.name + ' is a ' + this.type + ' company.'
	}
};

var eGain = Object.create(company);
eGain.name = 'eGain';
eGain.type = 'Software'
//console.log(eGain.info());

var bloomberg = Object.create(company);
bloomberg.type = 'Finance';
//console.log(bloomberg.info());