function calculate(operator)
{
    let num1=prompt("Enter the first number:");
    let num2=prompt("Enter the second number:");
    let result;
    switch(operator)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator");                
    }
}