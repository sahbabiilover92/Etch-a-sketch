const container = document.getElementById("container");
const button = document.getElementById("btn");

let promptNumber=16;

button.addEventListener("onclick",()=>{
    let value=prompt("What dimensions?");
        if (!Number.isInteger(value) && val <= 0 ){

            alert ("try again. make sure you are entering a positive whole number");
        } else {
            promptNumber = value;
        }
})
//number recieved from user via prompt


//the eventual total number of divs/squares within container
userInput= (promptNumber)**2;

console.log(userInput);

/*Bro so originally I had a calculated flex-basis in the styles.css file specifically for 16 by 16.
This equation, instead of using percentages, uses pixels. and works for any number.
I went and adjusted the width and height to 1005 in the css file in order to combat wrapping issues.*/
userFlexBasis= (1000/promptNumber);

console.log(userFlexBasis)

/*each iteration creates a new div. 
it only loops up to the total amount of desired squares or "blank by blank". 
Also styles and contains mouseover event.*/
for (let i=0; i<userInput; i++){
    const squareDiv = document.createElement("div");
    squareDiv.className="squareDiv";
    container.appendChild(squareDiv);
    squareDiv.style.flex = `1 1 ${userFlexBasis}px`;
    squareDiv.style.backgroundColor = "blue";

    squareDiv.addEventListener("mouseover", ()=>{
        squareDiv.style.backgroundColor = "green";
    
    });
};

