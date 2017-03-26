function askQuestions(){

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;

console.log (fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18) {
	console.log('User is an adult');
} else if (age >=13) {
	console.log('User is a teenager')
}
else { 
	console.log('User is a child');
}



var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;

if (firstName.toLowerCase == 'general' && lastName.toLowerCase !='assembly') {
	console.log('Greetings, General');
	var fullName = alert ('Greetings, General');

}

var faveColour = prompt('What is your favourite colour?').toLowerCase().trim();

if (faveColour === 'red' ||
	faveColour === 'green' ||
	faveColour === 'blue' ||
	faveColour === 'yellow') {

	$('h1').css('color', faveColour);

}
}

// When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

		// When the user clicks an h3
		$('h3').on('click', function() {

			// Toggle the next element. In the brackets after toggle can specify how many seconds
			$(this).next().slideToggle()

		});


});

console.log($);

// This is a single line comment
/* This is a 
block comment */