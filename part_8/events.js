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


