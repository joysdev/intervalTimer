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


