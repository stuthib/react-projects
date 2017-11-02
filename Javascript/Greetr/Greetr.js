//This is a IIFE;
(function(global, $){
	// Create a function that would return a new object function which is Greetr.init. This will prevent the user from calling new.
	var Greetr = function(firstname, lastname, language) {
		return new Greetr.init(firstname, lastname, language);
	}
	
	//Properties that are hidden to the outside world and is local to the Greetr object. This can't be modified from other objects.
	var supportedLangs = ['en', 'es', 'kn'];
	
	var greetings = {
		en: 'Hello',
		es: 'Hola',
		kn: 'Namaste'
	};
	
	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion',
		kn: 'Samachaar'
	};
	
	var formalGreeting = {
		en: 'Greetings',
		es: 'Saludos',
		kn: 'Namaskaar'
	};
	
	var info = {
		en: 'You are learning Javascript',
		es: 'estas aprendiendo javascript',
		kn: 'blah blah'
	};
	
	// Methods and properties in the prototype object are now exposed to the Greetr object and is chainable. The prototype is an object that will hold the methods and properties that are exposed.
	Greetr.prototype = {
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},
		validateLang: function() {
			if(supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},
		formalGreeting: function() {
			return formalGreeting[this.language] + ', ' + this.fullName() + '.';
		},
		greet: function(formal) {
			var msg;
			if(formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}
			if(console) {
				console.log(msg);
			}
			return this; // this would return the greetr object with the msg set to what is passed in the constructor.
		},
		info: function(){
			return info[this.language];
		},
		log: function() {
			if(console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}
			return this;
		},
		setLang: function(lang) {
			this.language = lang;
			this.validateLang();
			return this;
		},
		HTMLGreeting: function(selector, formal) {
			if(!$) {
				throw "jquery not loaded";
			}
			
			if(!selector) {
				throw "selector not found";
			}
			var msg;
			if(formal) {
				msg = this.formalGreeting();	
			} else {
				msg = this.greeting();
			}
			
			$(selector).html(msg);
			return this;
		},
		infoMessage: function(selector) {
			if(!$) {
				throw "jquery not loaded";
			} 
			
			if(!selector) {
				throw "selector not found";
			}
			
			var msg = this.info();
			$(selector).html(msg);
			return this;
		}
	};
	
	//This is internally called by the Greetr method when the object is first created. 
	Greetr.init = function(firstname, lastname, language) {
		var self = this;
		self.firstName = firstname || '';
		self.lastName = lastname || '';
		self.language = language || 'en';
		
		self.validateLang();
	}
	
	Greetr.init.prototype = Greetr.prototype;
	global.Greetr = global.G$ = Greetr;
	
}(window, jQuery));