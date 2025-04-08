const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;


/*EXPLANATION HOW WE HAVE CHOSEN THE RANDOM COLOUR:
HEX code is the usual code we have to write while choosing the random colour.
For loop is been used here because we have to make sure random colour keeps generating every second so the consitions are termed as 
1=> i =0
2=> i<6 because the code of colour is always less than 6.

colour = clour + hex[math.floor(Math.random()*16)]
this is the line we us e to generate the colour as Math.random help us to give the vlaue between 0 to 1[exclusive]
we multiplied it by 16 because if the hex code value.
Math.floor help us to makee the value in the integer of left hand side where the number lies in the number line.
*/
  };

  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
// Here we are declaring the interval id because we have to make sure that once the operation is running and we click on the start button again while the
// operation is running could make the operation run 2 times so it will give the result as change the colour of the background in every 0.5 second
// so here we are make suring by using the if statement as when ever invalidid is true dont run the operation again, if we click at the start whule the 
// operation is running previously as well.


// It will make sure that when ever invalidid is false then only it will run.
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
/*   intervalId Tracks the Interval:

 intervalId stores the ID returned by setInterval.

 If intervalId has a value (!intervalId is false), it means an interval is already running.

 If intervalId is null/undefined (!intervalId is true), we create a new interval.
 */
 
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);