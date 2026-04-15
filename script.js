const container = document.getElementById("container");
const button = document.getElementById("btn");

let promptNumber=16;

/*each iteration creates a new div. 
it only loops up to the total amount of desired squares or "blank by blank". 
Also styles and contains mouseover event.*/
let generateSquares = function(){
        
    //the eventual total number of divs/squares within container
    let userInput= (promptNumber)**2;

    console.log(userInput);

    /*Bro so originally I had a calculated flex-basis in the styles.css file specifically for 16 by 16.
    This equation, instead of using percentages, uses pixels. and works for any number.
    I went and adjusted the width and height to 1005 in the css file in order to combat wrapping issues.*/
    let userFlexBasis= (1000/promptNumber);

    console.log(userFlexBasis)

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

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
}; 

generateSquares();

//
button.addEventListener("click",()=>{
    let value = Number(prompt("What dimensions?"));
    if (!Number.isInteger(value) || value <= 0){
        alert("try again (make sure it's a positive whole number)");
    } else {
        promptNumber=value;
        generateSquares();
    }
});
//number recieved from user via prompt




