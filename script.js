// get all the btn element
const btn_0 = document.getElementById('d-0')
const btn_1 = document.getElementById('d-1')
const btn_2 = document.getElementById('d-2')
const btn_3 = document.getElementById('d-3')
const btn_4 = document.getElementById('d-4')
const btn_5 = document.getElementById('d-5')
const btn_6 = document.getElementById('d-6')
const btn_7 = document.getElementById('d-7')
const btn_8 = document.getElementById('d-8')
const btn_9 = document.getElementById('d-9')

const btn_plus = document.getElementById('plus')
const btn_minus = document.getElementById('minus')
const btn_mul = document.getElementById('multiply')
const btn_div = document.getElementById('division')
const btn_dot = document.getElementById('dot')

const btn_del = document.getElementById('del')
const btn_reset = document.getElementById('reset')
const btn_equal = document.getElementById('equal')

const inputNumber = document.querySelector('.main_input');
const sideNumber = document.querySelector('.side_input');

const keyArr = document.querySelectorAll('.numKey');
const operatorKeys = document.querySelectorAll('.operator_key');

console.log(keyArr, operatorKeys);

function calculation(a, b, opr) {
    let result;
    switch (opr) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }

    return result;
}


