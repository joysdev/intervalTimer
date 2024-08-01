/* If Equal Time per Pose is selected, user is presented with <input type="number">s  one for seconds (>=60), one for minutes (>=60), one for number of poses. Then they can choose a tone 
(or color flash) for start, finish, and change pose. Then they can save & name, then they can return to main menu, or start sequence. 

Main menu (index.html) has buttons for new sequence and saved sequences. Saved sequences has buttons for each saved sequence, and a button for new sequence. New sequence has Saved sequences button, and form for inputs.



const newsequence = document.querySelector('#newsequence');

// initialize button this should actually be startsequence.onclick
newsequence.onclick = goTimer;

const options = [
    {
        name: "sequence Name",
        
    }
]

function goTimer() {
    update(options[0]);
} */

const poseNumber = document.querySelector("#poseNumber");

submit.onclick = Add();

var _counter = 0;
function Add() {
    _counter++; //how to get this to be poseNumber??
    var oClone = document.getElementById("customTimer").cloneNode(true);
    oClone.id += (_counter + "");
    document.getElementById("timerHolder").appendChild(oClone);
}


/*

function createCustomForm () {

poseNumber * poseTime

//create poseNumber of poseTime s 

//and change pose label to its position in the list

}

createCustomForm (poseNumber * poseTime)?


const form = [
    {

    }
]

poseNumber.addEventListener("click", () => {
    /*add poseNumber-1 more time fields
})
 I'm really struggling to figure this out. To reiterate:
 I want for when User clicks Submit to input number of poses in their custom sequence, they are presented with that number of time fields.
 */

