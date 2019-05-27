// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.querySelector('#speak');
// capturing the buttons
var nounBtn = document.querySelector('#noun');
var verbBtn = document.querySelector('#verb');
var adjectiveBtn = document.querySelector('#adjective');
var anotherNounBtn = document.querySelector('#anotherNoun');
var placeBtn = document.querySelector('#place');
var result = document.querySelector('p');
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);

}
function randomValueFromArray(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
	
	//Show the text
	result.textContent = textToSpeak;
}
nounBtn.addEventListener('click', function () {
	textToSpeak += randomValueFromArray(nouns) + " ";
});
verbBtn.addEventListener('click', function () {
	textToSpeak += randomValueFromArray(verbs) + " ";
});
adjectiveBtn.addEventListener('click', function () {
	textToSpeak += randomValueFromArray(adjectives) + " ";
});
anotherNounBtn.addEventListener('click', function () {
	textToSpeak += randomValueFromArray(anotherNouns) + " ";
});
placeBtn.addEventListener('click', function () {
	textToSpeak += randomValueFromArray(places);
});

//Arrays

var nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The Cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var anotherNouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
