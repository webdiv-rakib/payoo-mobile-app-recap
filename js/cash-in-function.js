function getInputFieldById(id) {
    const inputField = document.getElementById(id).value;
    const inputNumber = parseFloat(inputField);
    return inputNumber;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id) {
    document.getElementById("cash-add-form").classList.add('hidden');
    document.getElementById("cash-out-form").classList.add('hidden');
    document.getElementById("transaction-form").classList.add('hidden');

    // show the section with the provided id
    document.getElementById(id).classList.remove('hidden');
}