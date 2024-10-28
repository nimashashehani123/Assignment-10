
const display = $('#display');
display.val("0");

function appendToDisplay(input){
    if (display.val() === "0") {
        display.val(input);
    } else {
        display.val(display.val() + input);
    }
}

function clearDisplay(){
    display.val("0");
}

function calculator(){
    try {
        display.val(eval(display.val()));
    } catch (error) {
        display.val("Error");
    }
}
