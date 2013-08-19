var expression = { 
    number1 : null, 
    number2 : null, 
    operator : null, 
    allFilled : function() { 
        if(this.number1 != null && this.number2 != null && this.operator != null) 
            return true;
        else 
            return false; 
    },
    getResult : function() {
        return eval(this.number1 + this.operator + this.number2);
    }
};

function validateField(field) {
    if(field.id == "operator") {
        try {
            expression.operator = getOperator(field.value); 
   
        } catch(x) {
            expression.operator = null;
            showError(field);
        }
    }
    else
    {
        var inputValue = field.value;
        try {
            eval("expression." + field.id + " = getNumber(inputValue);");
           
        } catch (x) {
            eval("expression." + field.id + " = null;");
            showError(field);
        }
    }

    if(expression.allFilled()) {
        document.getElementById("result").value = expression.getResult();
    }
}

function showError(field) {
    if(field.value != "")
        document.getElementById("result").value = "Error";
    else
        document.getElementById("result").value = "";
}

function getNumber(userInputValue)
{
    var number = parseFloat(userInputValue);
    if(userInputValue == String(number))
        return number;
    else
        throw new Error;
}

function getOperator(operator) {
    regex = /^[\+-\/\*]$/;
    if(regex.test(operator))
        return operator;
    else
        throw new Error;
}
