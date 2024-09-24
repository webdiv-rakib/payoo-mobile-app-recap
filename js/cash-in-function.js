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