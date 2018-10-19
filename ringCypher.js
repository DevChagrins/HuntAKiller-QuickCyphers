var values = "S13, G7, G5, S9, G8, S26, G14, S20, G9, S13, S7, S19, G5, S9, S22, G10, S6, S8, G20, G1, S15, G9, S7, G20, G12, S22, S15, G15";

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var arrayValues = values.split(",");
var splitPairs = [];
arrayValues.forEach(value => {
	splitPairs.push(value.replace(/\'/g, '').split(/(\d+)/).filter(Boolean));
});
	
//console.log(output);

var stringReturn = "";
splitPairs.forEach(pair => {
	var key = pair[0].replace(/\s/g,'').toUpperCase();
	var value = parseInt(pair[1], 10);
	var index = 0;
	if(key === "S") {
		index = alphabet.length - value;
	}
	else if(key === "G") {
		index = value;
	}
	else {
		console.log("FUCK");
	}

	stringReturn += alphabet[index];
});

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

var goldString = "";
splitPairs.forEach(pair => {
	var key = pair[0].replace(/\s/g,'').toUpperCase();
	var value = parseInt(pair[1], 10);
	var index = 0;
	if(key === "S") {
	}
	else if(key === "G") {
		index = value
		goldString += alphabet[index];
	}
	else {
		console.log("FUCK");
	}

});


console.log("Full: ", stringReturn);
console.log("Silver: " + silverString + " " + silverString.length);
console.log("Gold: ", goldString + " " + goldString.length);