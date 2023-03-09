// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate() {
    //This is a private function and has nothing in it since it can't be used outside this file and cannot be useful inside this file. If it were to be exported, it would look like the function callOperationFunction in 03-basic-calculator.js. Alternatively, if the other functions in this file were more complex, this could be used as a helper function.
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
function add(num1, num2) {
    return num1 + num2
}

// SUBTRACT FUNCTION
function subtract(num1, num2) {
    return num1 - num2
}

// MULTIPLY FUNCTION
function multiply(num1, num2) {
    return num1 * num2
}

// DIVIDE FUNCTION
function divide(num1, num2) {
    return num1 / num2
}


// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}

