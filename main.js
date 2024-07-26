/* If Equal Time per Pose is selected, user is presented with <input type="number">s  one for seconds (>=60), one for minutes (>=60), one for number of poses. Then they can choose a tone 
(or color flash) for start, finish, and change pose. Then they can save & name, then they can return to main menu, or start routine. Main menu has buttons for new routine and saved routines. Saved routines has buttons for each saved routine, and a button for new routine. New routine has Saved Routines button, and form for inputs.



const newroutine = document.querySelector('#newroutine');

// initialize button this should actually be startroutine.onclick
newroutine.onclick = goTimer;

const options = [
    {
        name: "Routine Name",
        
    }
]

function goTimer() {
    update(options[0]);
}


