document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.calculator__input');
    const numberButtons = document.querySelectorAll('.key--number');
    const operatorButtons = document.querySelectorAll('.key--operator');
    const resetButton = document.querySelector('.key--reset');
    const delButton = document.querySelector('.key--del');
    const equalButton = document.querySelector('.key--equal');

    let calculated = false;

    function addButtonClickListener(button) {
        button.addEventListener('click', function () {
            if (calculated) {
                inputElement.value = button.dataset.key;
                calculated = false;
            } else {
                inputElement.value += button.dataset.key;
            }
        });
    }

    numberButtons.forEach(addButtonClickListener);
    operatorButtons.forEach(addButtonClickListener);

    resetButton.addEventListener('click', function () {
        inputElement.value = '';
        calculated = false;
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
            calculated = true;
        } catch (error) {
            // Xato bo'lganda
            inputElement.value = 'Error';
        }
    });
});
