/*
How to create new element in the dom.
Steps to follow are termed below here are the quick notes to revis.

 If we are doing it in the HTML file then we have to first make the script tag and then proceed 
 further on the basis of that.

 1.const div = document.createElement('div')
#we can check it out in the console by the help of console.log(div)

2.If we want to customize it has to be done by the help of some properties of the tag.


div.classname = "main"
div.id = Math.round(Math.Random()*10 + 1)
div.setAttribute("title" , "generated text")
div.style.backgroundcolor = "green"
div.style.padding = "10px"
div.innerHTML = "hey new text which was added by the dom"

                                or

const addtext = document.createTextNodes("hey new text which was added by the dom")
div.appendChild(addText)

#HERE IS THE CATCH WHAT WE HAVE DONE ABOVE IS JUST ONLY SAVED IN THE MEMORY 
IF WE HAVE TO MAKE IT HAPPEN IN THE WEBPAGE WE NEED TO DO SOME MORE CODING TO MAKE 
IT HAPPEN IN THE WEBPAGE SO HERE IT IS:


document.body.appendChild(div)



*/
/*
if we have to use the dom inside the code file we have to use it like this way.

*/
