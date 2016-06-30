var colors = [
	"red", 
	"blue", 
	"green",
	"silver",
	"violet",
	"yellow",
	"orange",
	"scare"

	];


var scarePlay = new Audio('../assets/Scare.mp3');

var count = 0;

var cycle = function() {

	colorNum = Math.floor(Math.random()*colors.length);

	if (colors[colorNum] == "scare") {
		document.body.style.backgroundImage = "url(../assets/scare.png)";
		scarePlay.play();
	} else{
		document.body.style.backgroundColor = colors[colorNum];
	}
}

	// console.log(array[count]);
	// if (count == array.length) {
	// 	count = 0;
	// } else {
	// 	count++;	
	// };
;




