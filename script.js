let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let history = document.getElementById('history');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            let result = calculation(string);
            string = String(eval(string))
            inputBox.value = result;
        } else if (b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
        } else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else if (b.target.id == 'plusMinus') {
            string = String(-eval(string));
            inputBox.value = string;
        } else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});

function calculation(v) {
    let para = document.createElement('p');
    let data = v + " = " + eval(v).toFixed(4);
    para.innerText = data;
    history.appendChild(para);
    return eval(v);
}


