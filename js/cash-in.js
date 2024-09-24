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
        // add to transaction history
        const log = document.createElement('p');
        log.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(log);

        // should be a common function
        document.getElementById("transaction-container").appendChild(log);
    }
    else {
        alert("wrong");
    }
})