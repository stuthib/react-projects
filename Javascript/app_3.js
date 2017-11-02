/*** Closures ***/

//!! Creating closures on function expression. The execution context for greet is completed, but 'msg' is still in the scope and is available for the inner function to use it. This forms a closure.

var greet = function(msg) {
	return function(name) {
		//console.log(msg + ' ' + name);
	}
}

var greetMsg = greet('Hello');
greetMsg('Stuthi');

//!! Creating closures on function statements.

function logNums() {
	var arr = [];
	
	for(var i = 0; i < 3; i++) {
		arr.push(
			function(){ // This is the inner function. 
				//console.log(i);
			}
		);
	}
	return arr;
}

var ln = logNums();
//When we invoke the inner function, they are all using the same outer execution context variables. Since now i=3, they will all log 3.
ln[0](); //This function call will have access to the variables outside its execution context. When invoked, it will have access to arr and i = 3;
ln[1]();
ln[2]();

//!! How to handle the above condition. We invoke the anonymous function, or the function in the closure by wrapping it in (). This forms a closure and will have the current value of 'i' when executed. This returns another function.

function logNums2() {
	var arr2 = [];
	
	for(var i = 0; i < 3; i++) {
		arr2.push(
			(function(j){
				return function() {
					//console.log(j);
				}
			}(i))
		);
	}
	return arr2;
}

var ln2 = logNums2();
ln2[0](); //Now the value returned will be i = 0, since the function when invoked was pointing to i = 0.
ln2[1]();
ln2[2]();

//!! Another example for closure.

function greetNew(language) {
	if(language === 'en') {
		return function(msg){
			//console.log(msg);
		}
	} else if(language === 'es') {
		return function(msg) {
			//console.log(msg);
		}
	}
}

var greetEng = greetNew('en');
greetEng('Hello');

var greetEsp = greetNew('es');
greetEsp('Hola');

//!! Closures and Callbacks.

function greetCallback() {
	var greeting = 'Hi';
	setTimeout(function(){ //This is a callback function. It is executed after 3ms. This is also a first class function.
		//console.log(greeting);
	}, 3000);
}

greetCallback();

