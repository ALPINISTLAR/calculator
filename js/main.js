document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.calculator__input');
    const numberButtons = document.querySelectorAll('.key--number');
    const operatorButtons = document.querySelectorAll('.key--operator');
    const resetButton = document.querySelector('.reset');

    function addButtonClickListener(button) {
        button.addEventListener('click', function () {
            inputElement.value += button.dataset.key;
        });
    }

    numberButtons.forEach(addButtonClickListener);
    operatorButtons.forEach(addButtonClickListener);

    resetButton.addEventListener('click', function () {
        inputElement.value = '';
    });
});
