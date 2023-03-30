window.addEventListener("load", () => {
    const display = document.querySelector(".calculator-display");
    const keypadButtons = document.getElementsByClassName("keypad-button");

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button) => {
            button.addEventListener("click", () =>{
                calculadora (button, display);
            })
    });
})

function calculadora (button, display) {
    if(button.innerHTML == "C") {
        borrar(display);
    } else if (button.innerHTML == "=") {
        calcular(display);
    } else {
        actualizar(display, button);
    }
}

function calcular (display) {
    display.innerHTML = eval(display.innerHTML) //eval resuelve matematicamente lo que hay dentro de sus parametros
}

function borrar (display) {
    display.innerHTML = "0";
}

function actualizar (display, button) {
    
    if (display.innerHTML == 0){
        display.innerHTML = "";
    } 
        display.innerHTML = display.innerHTML + button.innerHTML;

    
}


