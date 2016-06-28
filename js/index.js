var colors = [
	"red", 
	"blue", 
	"green",
	"silver",
	"violet",
	"yellow",
	"orange",
	];

var count = 0;

var cycle = function(array) {
	console.log(array[count]);
	if (count == array.length) {
		count = 0;
	} else {
		count++;	
	};
};

var display = function(){
	cycle(colors);
}