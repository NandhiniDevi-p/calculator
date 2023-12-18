function createButton(text, clickHandler) {
    let button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", clickHandler);
    return button;
}

let output = document.createElement("input");
output.setAttribute("type", "text");
output.setAttribute("placeholder", "0");
output.setAttribute("id", "out-put");
document.querySelector(".calculator").appendChild(output);

let buttonsData = [
    { text: "CL", clickHandler: Clr },
    { text: "DEL", clickHandler: Del },
    { text: "%", clickHandler: () => display('%') },
    { text: "/", clickHandler: () => display('/') },
    { text: "7", clickHandler: () => display('7') },
    { text: "8", clickHandler: () => display('8') },
    { text: "9", clickHandler: () => display('9') },
    { text: "*", clickHandler: () => display('*') },
    { text: "4", clickHandler: () => display('4') },
    { text: "5", clickHandler: () => display('5') },
    { text: "6", clickHandler: () => display('6') },
    { text: "-", clickHandler: () => display('-') },
    { text: "1", clickHandler: () => display('1') },
    { text: "2", clickHandler: () => display('2') },
    { text: "3", clickHandler: () => display('3') },
    { text: "+", clickHandler: () => display('+') },
    { text: ".", clickHandler: () => display('.') },
    { text: "0", clickHandler: () => display('0') }

];


buttonsData.forEach(Data => {
    let button = createButton(Data.text, Data.clickHandler);
    document.querySelector(".calculator").appendChild(button);
});

let equal = document.createElement("button");
equal.setAttribute("id","equal");
equal.innerText = "=";
equal.addEventListener("click", calc);
document.querySelector(".calculator").append(equal);


function display(num) {
    output.value += num;
}

function calc() {
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("Invalid Entry");
    }
}

function Clr() {
    output.value = "";
}

function Del() {
    output.value = output.value.slice(0, -1);
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       