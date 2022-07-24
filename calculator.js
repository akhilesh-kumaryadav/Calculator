var buttons = document.getElementsByClassName("k-button");
var display = document.getElementById("display")
var operand1;
var operand2;
var operator;
var flag = false;

for(var i = 0 ; i < buttons.length ; i++)
{
    buttons[i].addEventListener('click', function (){
        var value = this.getAttribute('data-value');

        if(value == '+')
        {
            operator = '+';
            operand1 = parseFloat(display.innerText);
            display.innerText = "+";
            flag = true;
        }
        else if(value == '-')
        {
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText = "-";
            flag = true;
        }
        else if(value == '/')
        {
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText = "/";
            flag = true;
        }
        else if(value == '*')
        {
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText = "*";
            flag = true;
        }
        else if(value == '%')
        {
            operator = '%';
            operand1 = parseFloat(display.textContent);
            display.innerText = "%";
            flag = true;
        }
        else if(value == '=')
        {
            operand2 = parseFloat(display.textContent);
            var answer = eval(operand1+""+operator+""+operand2);
            display.innerText = answer;

        }
        else if(value == '+/-')
        {
            operand1 = parseFloat(display.textContent);
            operand1  = operand1 * -1;
            display.innerText = operand1;
        }
        else if(value == 'AC')
        {
            display.innerText = "";
        }
        else
        {
            if(flag == true) {display.innerText = ""; flag = false;}
            display.innerText += value;
        }
    });
}