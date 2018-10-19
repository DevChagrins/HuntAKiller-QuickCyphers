const minimist = require('minimist');

// Sample string, splits on ',': var values = "S13, G7, G5, S9, G8, S26, G14, S20, G9, S13, S7, S19, G5, S9, S22, G10, S6, S8, G20, G1, S15, G9, S7, G20, G12, S22, S15, G15";
var input = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Parse the arguments
var args = minimist(process.argv.slice(2), { alias: {i: "input", s: "split"} });

// Make sure there is input
if(args["input"]) {
	input = args["input"];
}

// Exits early if there is no input
if(input.length === 0)
{
	console.log("No input detected. Make sure you use -i <input> or --input=<input>");
	return;
}

// Checks for a modified string to split on, defaults to a space
var splitInput = []
var splitParam = " ";

if(args["split"]) {
	splitParam = args["split"];
}

// Splits the input into an array
var splitInput = input.split(splitParam);

// Splits each piece into Letter and Number pairs (example: S13 becomes [S, 13])
var splitPairs = [];
splitInput.forEach(value => {
	splitPairs.push(value.replace(/\'/g, '').split(/(\d+)/).filter(Boolean));
});

// Loops through each pair and gets the appropriate character, adds it to the string and outputs it
var stringReturn = "";
splitPairs.forEach(pair => {
	var key = pair[0].replace(/\s/g,'').toUpperCase();
	var value = parseInt(pair[1], 10);
	var index = 0;
	if(key === "S") {
		index = alphabet.length - value;
	}
	else if(key === "G") {
		index = value - 1;
	}
	else {
		console.log("FUCK");
	}

	stringReturn += alphabet[index];
});

// Does the above for only for S
var silverString = "";
splitPairs.forEach(pair => {
	var key = pair[0].replace(/\s/g,'').toUpperCase();
	var value = parseInt(pair[1], 10);
	var index = 0;
	if(key === "S") {
		index = alphabet.length - value;
		silverString += alphabet[index];
	}
	else if(key === "G") {
	}
	else {
		console.log("FUCK");
	}

});

// Does the above for only for G
var goldString = "";
splitPairs.forEach(pair => {
	var key = pair[0].replace(/\s/g,'').toUpperCase();
	var value = parseInt(pair[1], 10);
	var index = 0;
	if(key === "S") {
	}
	else if(key === "G") {
		index = value - 1;
		goldString += alphabet[index];
	}
	else {
		console.log("FUCK");
	}

});


console.log("Full: ", stringReturn);
console.log("Silver: " + silverString + " " + silverString.length);
console.log("Gold: ", goldString + " " + goldString.length);