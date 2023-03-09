let plus = '+'
let minus = '-'
let mult = '*'
let div = '/'
let num1 = getNum1()
let num2 = getNum2()
let operation = getOperation()
alert(callOperationFunction(num1, num2, operation))

// IMPORT THE MODULE
import {add, subtract, multiply, divide} from './modules/calculator.js'

// COLLECT FIRST NUMBER FROM USER
function getNum1(){
    let userNum1
    do {
        userNum1 = parseInt(prompt('Enter your first number.'))
        console.log(userNum1)
    } while (isValidNumber(userNum1));
    return userNum1
}

function isValidNumber(userInput) {
    return isNaN(userInput)
}

// COLLECT SECOND NUMBER FROM USER
function getNum2(){
    let userNum2
    do {
        userNum2 = parseInt(prompt('Enter your second number.'))
        console.log(userNum2)
    } while (isValidNumber(userNum2));
    return userNum2
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
function getOperation(){
    let userOperation
    do {
        userOperation = prompt('What kind of operation would you like to perform (+,-,*,/)?')
        console.log(userOperation)
    } while (!isValidOperation(userOperation));
    return userOperation
}

function isValidOperation(userOperationInput) {
    switch(userOperationInput) {
        case plus:
        case minus:
        case mult:
        case div:
            return true
        default: 
            return false  
    } 
}

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
function callOperationFunction(num1, num2, operation) {
    switch(operation) {
        case plus:
            return add(num1, num2)
            break
        case minus:
            return subtract(num1, num2)
            break
        case mult:
            return multiply(num1, num2)
            break
        case div:
            return divide(num1, num2)
    }  
}
