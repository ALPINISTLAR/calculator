document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.calculator__input');
    const numberButtons = document.querySelectorAll('.key--number');
    const operatorButtons = document.querySelectorAll('.key--operator');
    const resetButton = document.querySelector('.key--reset');
    const delButton = document.querySelector('.key--del');
    const equalButton = document.querySelector('.key--equal');

    function addButtonClickListener(button) {
        button.addEventListener('click', function () {
            inputElement.value += button.dataset.key;
        });
    }

    numberButtons.forEach(addButtonClickListener);
    operatorButtons.forEach(addButtonClickListener);

    resetButton.addEventListener('click', function () {
        inputElement.value = "";
    });

    delButton.addEventListener('click', function () {
        if (inputElement.value.length > 0) {
            inputElement.value = inputElement.value.slice(0, -1);
        }
    });

    equalButton.addEventListener('click', function () {
        try {
            // Qiymatni hisoblash
            const result = eval(inputElement.value);

            // Natijani inputga yozish
            inputElement.value = result;
        } catch (error) {
            // Xato bo'lganda
            inputElement.value = 'Error';
        }
    });
});
