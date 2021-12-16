(function () {
    'use strict';
    var input1 = document.querySelector('#number1');
    var input2 = document.querySelector('#number2');
    var button = document.querySelector('button');
    var sum = function (a, b) {
        return a + b;
    };
    button.addEventListener('click', function () {
        var number1 = Number(input1.value);
        var number2 = Number(input2.value);
        console.log(sum(number1, number2));
    });
})();
