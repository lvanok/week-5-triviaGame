// var audio = new Audio('file:///Users/lisavanorden/Documents/RCB_files/week5_files/TriviaGame/Enya+-+Fairytale(music.naij.com).mp3');

setTimeout(fortySeconds, 1000 * 1);
setTimeout(seventySeconds, 1000 * 7);
setTimeout(timeUp, 1000 * 4);

function fortySeconds() {
  $('#time-left').html('<h2>About 80 Seconds Left!</h2>');
  // alert('80 seconds left');
  set timeleft = 80;
}

function seventySeconds() {
  $('#time-left').html('<h2>About 10 Seconds Left!</h2>');
  // alert('10 seconds left');
  set timeleft = 10;
}

function timeUp(){
  audio.play();
  $('#time-left').html('<h2>Time\'s Up!</h2>');
  // alert('Time is up');
  set timeleft = 1;
}
var start = myFunction(startbutton){
	function questions(){	
	}
}
var timeleft = "time-left";
function button(){
	if true {
		set (correct counter ++1)
	}else{
		set (incorrect counter ++1)
	}else{
		set (uanswered counter ++1)
	}
});

