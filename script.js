const container = document.getElementById("container");

promptNumber=50

userInput= (promptNumber)**2;

console.log(userInput);

userFlexBasis= (1000/promptNumber - 0.1);

console.log(userFlexBasis)
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

