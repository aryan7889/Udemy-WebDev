// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

document.getElementById('owl').addEventListener('click', function(){
    alert("owl clickeed again.")
}, false)


document.getElementById('images').addEventListener('click', function(){
    alert("clicked inside the ul")
}, false)

// yeh dono same code hai but hum 2 different id ko target kr 
// rhe hai lets see how it will behave and how would be the output.

// EVENT PROPAGATION :
// bubbling and capturing.


// Khi baar hum event ki buubling nhi chate toh hum 
// e.stoppropogation() use kr skte hai.

// PREVENT DEFAULT:


document.getElementById('google').addEventListener
('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    console.log("google clicked");
}, false)


// now we wANt to remove all the images when clicked on it.


document.querySelector('#images').addEventListener
('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeit = e.target.parentNode
        removeit.remove()
    }
   
})


// to create the stop watch function witht he dom manipulation
// and the event listeners

// varaibles for the start stop and reset.
let start = document.querySelector('#start')
let reset = document.querySelector('#reset')

// variables for the time
let seconds = 0
let minutes = 0
let hours = 0
// here problem would be that stopwatch would be running but the leading zero would 
// be disappear as sson as the seconds or the minutes would be in the double'
// digit. so now new variable as to be made so that it dont disappear:
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;
// variables for set interval
let timeInterval = 'null'
let timestatus = 'stopped'
function stopwatch(){
    seconds ++
    if(seconds/60===1){
        seconds = 0;
        minutes++;
    }
    if (minutes/60===1) {
        minutes = 0;
        hours++
    }
    if (seconds<10){
        leadingseconds = 0 + seconds.toString();
    }else{
        leadingseconds = seconds;
    }
    if (minutes<10){
        leadingminutes = 0 + minutes.toString();
    }else{
        leadingminutes = minutes;
    }
    if (hours<10){
        leadinghours = 0 + hours.toString();
    }else{
        leadinghours = hours;
    }
let display = document.querySelector('timer').innerText = leadinghours + ':'+ leadingminutes + ':'
leadingseconds;
}
window.setInterval(stopwatch,1000);

startstopbutton.addEventListener('click',function(){
    if(timestatus==='stopped'){
        timeInterval = window.setInterval(stopwatch,1000)
        document.getElementById('startstopbtn').innerText = '.....'
        timestatus = 'started'
    }else{
        window.clearInterval(timeInterval)
        document.getElementById('startstopbtn').innerText = '....'
        timestatus = 'stopped'
    }
});

resetbtn.addEventListener('click',function() {
    windows.clearInterval(timeInterval);
    seconds = 0
    minutes = 0
    hours = 0

    documnet.getElementById('timer').innerText = "00:00:00"
})


// to do list:

const addtask = document.querySelector('#add-task')
const taskmanager = documnet.querySelector('#task manager')
const inputtask = document.querySelector('#inputtask');

// event listner for the add the task button
addtask.addEventListener('click',function () {
    let task = document.createElement('div')
    task.classList.add('task');

    let li = document.createElement('li')
    li.innerText = `${inputtask.value}`
    task.append(li);

    let checkbutton = document.createElement("button")
    checkbutton.innerText = "✓"
    checkbutton.classList.add('checktask')
    task.append(checkbutton)

    let decletebutton = document.createElement("button")
    decletebutton.innerText = '...'
    decletebutton.classList.add('deletebtn')
    task.append(decletebutton)

    if (inputvalue === "") {
        alert('please type something.')
    }else{
        taskmanager.append(task)
    }

    inputtask = ""

    // to line through the function which have been completed on
    // checking the correct box.
})


// mordern to do list:

function calculator(operation) {
    return function(a, b) {
        if (operation === "add") return a + b;
        if (operation === "multiply") return a * b;
        if (operation === "subtract") return a - b;
    };
}
let add = calculator("add");
let multiply = calculator("multiply");
console.log(add(5, 3));
console.log(multiply(4, 6));

