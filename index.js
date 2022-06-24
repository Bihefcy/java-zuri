calc()

function calc(){
    var num1 = prompt("Type in the first number?")
    var num2 = prompt("Type in the second number?")
    num1 = Number(num1)
    num2 = Number(num2)

    var operator = prompt("Select which mathematical operation to use, +, -, /, *")

    if( operator === '+') {
        alert(num1 + num2)
    }
    else if ( operator === '-'){
        alert(num1 - num2)
    }
    else if ( operator === '/'){
        alert(num1 / num2)
    }
    else if ( operator === '*'){
        alert(num1 * num2)
    }

}