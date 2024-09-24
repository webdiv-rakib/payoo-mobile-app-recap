document.getElementById("cash-in-btn").addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Cash in button clicked");

    const addMoney = getInputFieldById("input-amount");
    const userPin = getInputFieldById("user-pin");
    const availableBalance = getTextValueById("available-balance")
    console.log(addMoney, userPin);

    if (userPin === 12345) {
        const newBalance = availableBalance + addMoney;
        console.log(newBalance);
        document.getElementById("available-balance").innerText = newBalance;
    }
    else {
        alert("wrong");
    }
})