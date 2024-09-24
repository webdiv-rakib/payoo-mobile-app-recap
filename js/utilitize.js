
// common shared functions here
// console.log("utility file added");
// function getInputFieldValueById() {
//     // console.log("will get value by id");
//     const addMoney = document.getElementById("input-amount").value;
//     return addMoney;
// }

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}