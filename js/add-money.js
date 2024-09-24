// console.log("add money loaded");
document.getElementById("cash-in-btn").addEventListener('click', function (event) {
    event.preventDefault();
    // console.log("add money button clicked");

    // getInputFieldValueById()

    // const addMoney = getInputFieldValueById();
    // console.log(addMoney);

    const addMoney = getInputFieldValueById('input-amount');
    console.log(addMoney);

    const pinNumber = getInputFieldValueById("user-pin");
    console.log(pinNumber);






    // --------------------------------------------------------------------------
    // const addedAmount = document.getElementById('input-amount').value;
    // const addedPin = document.getElementById("user-pin").value;


    // const availableBalance = document.getElementById("available-balance").innerText;


    // const addedAmountNumber = parseFloat(addedAmount);

    // const balance = parseFloat(availableBalance);


    // if (addedPin === '12345') {
    //     const newBalance = addedAmountNumber + balance;
    //     console.log(newBalance);
    //     document.getElementById("available-balance").innerText = newBalance;
    // }
    // else {
    //     alert("Wrong Pin Number");
    // }

})