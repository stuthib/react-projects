//Execution Stack and context:

function a() {
	var myVar = 'RJ';
	//console.log("In a:" + myVar); //=> RJ
	function b() {
		//console.log("In b: " + myVar) //=> RJ
	}
	b();
	c();
}

function c() {
	//console.log("In b: " + myVar) //=> Stuthi
}

var myVar = 'Stuthi';
a();

//Coercing :

var sum1 = 1 + 1 + '2'; // 22
var sum2 = '1' + 2 + 2; // 122

//Operators :

//Objects Literal Syntax :

var person = {
	firstName : "Stuthi", 
	lastName : "Balaji",
	address : {
		street : "753 S Fair Oaks",
		city : "Sunnyvale"
	}
};
//console.log(person);

function greet(person) {
	//console.log("Hi" + person.firstName);
}
greet(person);

greet({
	firstName : 'Stuthi', 
	lastName : 'Balaji'
})


//Namespace :

var greet = "Hello";
var greet = "Hola!";

//console.log(greet); => Hola.
//Create namespace objects.

//var english = {};
var spanish = {};

//console.log(english.greeting.greet = 'Hello') => error since english.greeting is 'undefined' and undefined.greet cannot be set.

var english = { 
	greeting : { 
		greet: 'hello'
	}
}

spanish.greet = 'Hola!';

//console.log(english);
//console.log(spanish);

//JSON <=> Objects 
var information = {
	firstName: 'Stuthi',
	proffesion: 'Developer'
}
//console.log("Object to JSON: " + JSON.stringify(information)); //=> {"firstName":"Stuthi","proffesion":"Developer"}

var jsonInfo = '{"firstName": "Stuthi", "lastName": "Balaji"}';
//console.log("JSON to Object: " + JSON.parse(jsonInfo)); //=> [object Object]


/*** First Class Functions - They are special types of objects ***/

//!!Hoisted function
function f() {
	//console.log('Hi'); //=> Hi
}
f();
f.language = 'English';
//console.log(f.language); //=> English

//!!Functions as expressions will return values.
//fExp(); //=> Will throw error, since fExp is undefined in creation phase.
var fExp = function() {
	//console.log('Hi from fExp');
}
fExp(); //=> Will return the function as an object or expression or value. This is the way to invoke a function that is used as an expression.
//console.log(fExp); //=> function() {console.log('Hi from fExp');}

//!!First Class function, is where we pass functions to other functions as params.
function log(a) {
	a(); //=>This will invoke the function a() which is passed as a parameter when invoked.
}
log(function(){
	//console.log('Hi from first class function');
});

/*** Pass by Value and Reference ***/

//!!Pass by Value (Primitives). The = will create a new memory space. Hence mutating them will not cause the other variable value to be mutated.

var a = 3;
var b;

b = a;

//console.log(b); //=> This will give 3.
a = 2;
//console.log(b); //=> This will also give 3.

//!!Pass by Reference. (Only Objects and hence even functions). This will point to the memory location and mutating it, will mutate the other variables pointing to it.

var ref = {name: 'Stuthi'};
var newRef = ref;
//console.log(newRef); //=> This will give Stuthi.

ref.name = 'RJ';
//console.log(newRef); //=> Since it is pointing to the same location as ref, and ref is mutated to RJ, it will not give RJ.

//!! If you create a new object, the it will point to a new memory location.

ref = {name: 'Amita'};
//console.log(ref); //New location for ref now contains Amita.
//console.log(newRef); //This is not mutated and points to a different location which has RJ.

