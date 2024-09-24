document.getElementById("cash-out-btn").addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Cash out button clicked");

    const cashOutAmount = getInputFieldById("cash-out-amount");
    const userCashOutPin = getInputFieldById("cash-out-pin");
    const currentBalance = getTextValueById("available-balance");

    console.log(cashOutAmount, userCashOutPin);
    if (userCashOutPin === 12345) {
        const updateBalance = currentBalance - cashOutAmount;
        console.log(updateBalance);
        document.getElementById("available-balance").innerText = updateBalance;
    }
    else {
        alert("wrong pin number");
    }
})