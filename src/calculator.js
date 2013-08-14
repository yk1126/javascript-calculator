function equals() {
    try {
        var number1 = returnFloat(document.getElementById("number1").value);
        var number2 = returnFloat(document.getElementById("number2").value);
    } 
    catch (x) {
        alert("Invalid Number!");
        return;
    }    
    
    try {
        var operator = returnOperator(document.getElementById("operator").value);    
    } catch (x) {
        alert("Invalid Operator!");
        return;
    }
    

    var result = calculateResult(number1, number2, operator);
    document.getElementById("result").value = result;

}

function calculateResult(number1, number2, operator) {
    return eval(number1 + operator + number2);
}

function returnFloat(stringNum)
{
    var intNum = parseFloat(stringNum);
    if(stringNum == String(intNum))
        return intNum;
    else
        throw new Error;
}

function returnOperator(operator) {
    regex = /^[\+-\/\*]$/;
    if(regex.test(operator))
        return operator;
    else
        throw new Error;
}
