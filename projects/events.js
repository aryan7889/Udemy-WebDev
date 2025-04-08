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

