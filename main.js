const newroutine = document.querySelector('#newroutine');

// initialize button
newroutine.onclick = goTimer;

const options = [
    {
        name: "Routine Name",
        
    }
]

function goTimer() {
    update(options[0]);
}


