const container = document.getElementById("container");

userInput= (16)**2;

console.log(userInput);

for (let i=0; i<userInput; i++){
    const squareDiv = document.createElement("div");
    squareDiv.className="squareDiv";
    container.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", ()=>{
        squareDiv.style.backgroundColor = "green";
    });
};

