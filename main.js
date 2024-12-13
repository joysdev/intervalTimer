//function addFn() {
    //const divEle = document.getElementById("poseTime");
    //divEle.innerHTML += `<div id="poseTime"><input type="number" class="input" id="hour" min="0" max="24" step="1" placeholder="hr" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"></input><input type="number" class="input" id="minutes" min="0" max="60" step="1" placeholder="min"></input><input type="number" class="input" id="seconds" min="0" max="60" step="1" placeholder="sec"></input></div>`;
//};

function addFn() {
  const divEle = document.getElementById("poseTime");
  const newPose = document.createElement("div");
  newPose.className = "pose-item"; // Assign a class instead of an ID
  newPose.innerHTML = `
      <input type="number" class="input" min="0" max="24" step="1" placeholder="hr">
      <input type="number" class="input" min="0" max="60" step="1" placeholder="min">
      <input type="number" class="input" min="0" max="60" step="1" placeholder="sec">
  `;
  divEle.appendChild(newPose);
}

function remFn() {
  const divEle = document.getElementById("poseTime");
  // Check if there are multiple pose containers to remove
  const lastPose = divEle.querySelector("div:last-child"); // Target the last added pose
  if (lastPose && divEle.childElementCount > 1) {
      lastPose.remove(); // Remove only if there's more than one pose
  } else {
      alert("No poses left to remove!");
  }
}


/*function remFn() {
    const divEle = document.getElementById("poseTime");
    poseTime -= 1;
};
//https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript (Bergi answer)
/*var interval = 1000; // ms
var expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
    var dt = Date.now() - expected; // the drift (positive for overshooting)
    if (dt > interval) {
        // something really bad happened. Maybe the browser (tab) was inactive?
        // possibly special handling to avoid futile "catch up" run
    }
    … // do what is to be done

    expected += interval;
    setTimeout(step, Math.max(0, interval - dt)); // take into account drift
}

/*const poseTime = document.getElementById("poseTime");
const form = `<input type="number" class="input" id="hr" min="0" max="24" step="1" placeholder="hr"></input>
<input type="number" class="input" id="min" min="0" max="60" step="1" placeholder="min"></input>
<input type="number" class="input" id="sec" min="0" max="60" step="1" placeholder="sec"></input>`;

const addBtn = document.getElementById('addBtn');

let hr = 1;
let min = 2;
let sec = 3;

let isError = false;

/* apply this only to time inputs, not seq naming
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
  } */

/*01Sept the following works but adds them inline instead of block
function addPose() {
    poseTime.innerHTML += form;
}

addBtn.addEventListener("click", addPose);

/*

let input = document.getElementsByClassName(input);

if (/[^\d]/.test(input)) {
    // value has characters other than 0-9.
    alert(Invalid);
  };

line 50 of calorie counter 

if (invalidInputMatch) {
    alert(`Invalid Input: ${invalidInputMatch[0]}`);
    isError = true;
    return null;
}
    */


/*function addFn() {
    
    divEle.innerHTML += `<div id="poseTime">
    <input type="number" class="input" id="hr" min="0" max="24" step="1" placeholder="hr"></input>
    <input type="number" class="input" id="min" min="0" max="60" step="1" placeholder="min"></input>
    <input type="number" class="input" id="sec" min="0" max="60" step="1" placeholder="sec"></input>
 </div>`;
}

/* What I want removeFn() to accomplish:
Delete the last poseTime added when User clicks the Remove a Pose button. 



function removeFn() {
    poseTime.innerHTML -= form;
 
  }



/*function removeFn() {

}


$(function() {
    var poseDiv = $('#poseTime');
    var i = $('#poseTime').size() + 1;

    $('#addBtn').bind('click', function() {
            //$().appendTo(scntDiv);
            console.log(i)
            $('<p id="newp'+i+'"></p>').appendTo(scntDiv);
            var html = '<fieldset class="form-group input-group-sm col-md-4"><label for="formGroupExampleInput">Title</label><input type="text" class="form-control" id="p_scnt" name="p_scnt_' + i +'" style="max-width: 100px;" placeholder="e.g. Day 1" /></fieldset><fieldset class="form-group input-group-sm col-md-8"><label for="formGroupExampleInput">Artists</label><input type="text" class="form-control" id="p_scnt" name="p_scnt_' + i +'" style="max-width: 250px;" placeholder="e.g. AC/DC, Guns and Roses" /></fieldset><a href="#" id="remBtn' + i +'">Remove</a>';
             var succss = $("#newp"+i).append(html)
             console.log(succss)
            $('#remBtn'+ i ).on('click', function() {
            	console.log($(this).parent())
                $(this).parent().remove();
                   return false;
            });
            i++;
            return false;
    });

    
});





/*function saveFn() {
    
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

