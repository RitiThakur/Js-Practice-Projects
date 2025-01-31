const prompt = require("prompt-sync")();

const getNumber = () =>{
    while(true){
        const number = parseFloat(prompt("Enter you number: "));
        if(isNaN(number)){
            console.log("Invalid input, try again");
        }
        else{
            return number;
        }
    }
};

const number1 = getNumber();
const number2 = getNumber();

const operator = prompt("Enter sign ");

let result;
let valid=true;

switch(operator){
   case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        if(number2 === 0){
            valid=false;
            console.log("Zero Division Error");
        }
        result = number1 / number2;
        break;
    default:
        console.log("Invalid");
        valid = false;
        break;
}

if(valid){
    console.log(number1,operator,number2," = ", result);
}