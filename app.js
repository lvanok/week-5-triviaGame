// var audio = new Audio('file:///Users/lisavanorden/Documents/RCB_files/week5_files/TriviaGame/Enya+-+Fairytale(music.naij.com).mp3');

setTimeout(fortySeconds, 1000 * 1);
setTimeout(seventySeconds, 1000 * 7);
setTimeout(timeUp, 1000 * 4);

function fortySeconds() {
  $('#time-left').html('<h2>About 80 Seconds Left!</h2>');
  // alert('80 seconds left');
  // set timeleft = 80;
  $("timeleft").text("80");
}

function seventySeconds() {
  $('#time-left').html('<h2>About 10 Seconds Left!</h2>');
  // alert('10 seconds left');
  // set timeleft = 10;
   $("timeleft").text("10");
}

function timeUp(){
  audio.play();
  $('#time-left').html('<h2>Time\'s Up!</h2>');
  // alert('Time is up');
  // set timeleft = 1;
  $("timeleft").text("1");
}
var start = myFunction(startbutton) 
function questions() {	
var timeleft = "timeleft";

var button = function truebutton() {
    document.getElementById("demo").innerHTML = console.log(true);
var button = function falsebutton() {
    document.getElementById("demo").innerHTML = console.log(false);
      } 
    }  
var correct = +i;
var incorrect = +i;
var unanswered = +i;

for (button = true
		return correct +1
	}else{
		return incorrect +1
	}else{
		return uanswered +1
	}
});