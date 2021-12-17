"use strict";
(function () {
    'use strict';
    const input1 = document.querySelector('#number1');
    const input2 = document.querySelector('#number2');
    const button = document.querySelector('button');
    const sum = (a, b) => {
        return a + b;
    };
    button.addEventListener('click', () => {
        const number1 = Number(input1.value);
        const number2 = Number(input2.value);
        console.log(sum(number1, number2));
    });
})();
