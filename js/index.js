document.querySelectorAll('.button')
    .forEach(el => el.addEventListener('click', button));
document.querySelector('.calc').addEventListener('click', calculation);
document.querySelector('.clear').addEventListener('click', clear);
document.querySelector('.fraction').addEventListener('click', fraction);
document.querySelector('.sqrt').addEventListener('click', sqrt);
document.querySelector('.sqr').addEventListener('click', sqr);

const display = document.querySelector('.display');

function button(event) {
    display.value += event.target.innerText;
}

function calculation() {
    display.value = eval(display.value);
}

function clear() {
    display.value = '';
}

function fraction() {
    const x = display.value;
    if (x == 0) {
        return display.value = 'Calculation is impossible';
    }
    else {
        display.value = 1 / x;
    }
}

function sqrt() {
    const x = display.value;
    if (x < 0) {
        return display.value = 'Calculation is impossible';
    }
    else {
        if (x == 0) {
            return 1;
        }
    }
    display.value = Math.sqrt(x);
}

function sqr() {
    const x = display.value;
    display.value = x * x;
}
