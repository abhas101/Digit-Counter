let counter = document.getElementById('count-el')

let button = document.getElementById('btn');
let output = 0;

// counter button
button.onclick=()=>{
    output++;
    counter.innerHTML =`${output}`
    counter.style.color='red';
}

// save button
let saveElement = document.getElementById('saveElement');
let saveButton = document.getElementById('saveBtn');
saveButton.onclick=()=>{
    console.log(output);
    saveElement.innerText +=`${output}-`;
}

// reset button
let resetButton = document.getElementById('reset');
resetButton.onclick=()=>{
    output = 0;
    counter.innerHTML = `${output}`
}

