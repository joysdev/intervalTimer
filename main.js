function addFn() {
    const divEle = document.getElementById("poseTime");
    divEle.innerHTML += `
<div id="poseTime"><input type="number" id="hour" min="0" max="24" step="1" placeholder="hr" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"></input>
            <input type="number" id="minutes" min="0" max="60" step="1" placeholder="min"></input>
            <input type="number" id="seconds" min="0" max="60" step="1" placeholder="sec"></input>
        </div>
`;
}

/*function removeFn() {
    poseTime.remove();
}


/* If Equal Time per Pose is selected, user is presented with <input type="number">s  one for seconds (>=60), one for minutes (>=60), one for number of poses. Then they can choose a tone 
(or color flash) for start, finish, and change pose. Then they can save & name, then they can return to main menu, or start sequence. 

Main menu (index.html) has buttons for new sequence and saved sequences. Saved sequences has buttons for each saved sequence, and a button for new sequence. New sequence has Saved sequences button, and form for inputs.

 I want for when User clicks Submit to input number of poses in their custom sequence, they are presented with that number of time fields.
 */

