const display = $('#display');
$('#clear-button').on('click', clearDisplay);

function appendToDisplay(input){
    display.val(display.val() + input);
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
