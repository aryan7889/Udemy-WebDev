const randomColor = function (){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i <6; i++) {
       color =+ hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let invalidID;
const startChangingColor = function startChangingColor(){
    if (!invalidID) {
        invalidID = setInterval(bgcolor,1000)
    }

    function bgcolor(){
        document.body.style.backgroundColor = randomColor;
    }
};

const stopChangingColor = function stopChangingColor(){
    clearInterval(invalidID)
    invalidID = null;
}


document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)