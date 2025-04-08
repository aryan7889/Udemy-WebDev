// to get access to the form:
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'please provide the valid info.'
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please provide the valid info.'
    }
    else{
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    }
results.innerHTML = `${bmi}`

})

/*
Question is that can't we make the height or the weight out of the form event
or we have to write it under the form event only?
*/






// to make the digital clock here we would be learning the set interval 
// so that it will show us the time every second.


const clock = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)

/*
Here is the syntax of this type of the project whenever we have to
set the intervsl in the project we have to use this syntax which
is fixed and here the second attribute which is the 1000 can be 2000 as well it 
is showing that it is 1 second or 2 second or 3 second for 3 seconds we can use 
3000.



Here the innerHTML is given as the toLocalTimeString but there are many method 
for doing that we can explore on to the further basis.
*/



