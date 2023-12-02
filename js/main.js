document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.calculator__input');
    const numberButtons = document.querySelectorAll('.key--number');
    const operatorButtons = document.querySelectorAll('.key--operator');
    const resetButton = document.querySelector('.key--reset');
    const delButton = document.querySelector('.key--del');

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
});
