function addFn() {
    const divEle = document.getElementById("poseTime");
    divEle.innerHTML += `<div id="poseTime"><input type="number" class="input" id="hour" min="0" max="24" step="1" placeholder="hr" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"></input><input type="number" class="input" id="minutes" min="0" max="60" step="1" placeholder="min"></input><input type="number" class="input" id="seconds" min="0" max="60" step="1" placeholder="sec"></input></div>`;
}

function removeFn() {

}

function saveFn() {
    
}

function startFn() {
    
}

function pauseFn() {
    
}

function resumeFn() {
    
}

var seconds
var minutes
var hours

var pose

var cushion

var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");

function changePose() {

}

function 



/*function removeFn() {
    poseTime.remove();
}


/* If Equal Time per Pose is selected, user is presented with <input type="number">s  one for seconds (>=60), one for minutes (>=60), one for number of poses. Then they can choose a tone 
(or color flash) for start, finish, and change pose. Then they can save & name, then they can return to main menu, or start sequence. 

Main menu (index.html) has buttons for new sequence and saved sequences. Saved sequences has buttons for each saved sequence, and a button for new sequence. New sequence has Saved sequences button, and form for inputs.

 I want for when User clicks Submit to input number of poses in their custom sequence, they are presented with that number of time fields.


window.onload = function() {

  var seconds = 20;
  var rest = true;
  var interval;

  var intervalTime = 20;
  var breakTime = 10;

  var settingsButton = document.getElementById("settings");
  var intervalInput = document.getElementById("intervalTime");
  var breakInput = document.getElementById("breakTime");

  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  var resetButton = document.getElementById("reset");

  var statusHeader = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");

  settingsButton.onclick = function() {
    intervalTime = Math.floor(intervalInput.value * 1);
    breakTime = Math.floor(breakInput.value * 1);
    reset();
  }

  startButton.onclick = function() {
    rest = false;
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
  }

  resetButton.onclick = function() {
    reset();
  }

  function reset() {
    clearInterval(interval);
    seconds = intervalTime;
    secondsSpan.innerText = seconds;
    rest = true;
    changeToRest();
  }

  pauseButton.onclick = function() {
    clearInterval(interval);
  }

  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerText = seconds;
    checkForStateChange();
  }

  function checkForStateChange() {
    if (seconds == 0 && rest == false) {
      seconds = breakTime + 1;
      rest = true;
      changeToRest();
    } else if (seconds == 0 && rest == true) {
      seconds = intervalTime + 1;
      rest = false;
      changeToGo();
    }
  }

  function changeToRest() {
    $("body").css("background", "cyan");
    statusHeader.innerText = "Rest";
  }

  function changeToGo() {
    $("body").css("background", "pink");
    statusHeader.innerText = "Go!";
  }

}


 */

