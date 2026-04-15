const container = document.getElementById("container");

for (let i=0; i<16; i++){
    const squareDiv = document.createElement("div");
    squareDiv.className="squareDiv";
    container.appendChild(squareDiv);
};