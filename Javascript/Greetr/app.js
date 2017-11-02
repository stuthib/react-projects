// Get a new object of Greetr on click. Use chainable methods on this. Set the html to show right message.

$("#login").click(function(){
	var loginGrtr = G$('Stuthi', 'Balaji');
	$("#logindiv").hide();
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).infoMessage('#body').log();
});