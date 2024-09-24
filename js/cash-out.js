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

        // add to transaction history
        const log = document.createElement('p')
        log.classList.add('bg-yellow-300');
        log.innerHTML = `
            <h4 class=" text-2xl font-bold">Cash Out</h4>
            <p>${cashOutAmount}Withdraw. New Balance ${updateBalance} </p>
        `
        document.getElementById("transaction-container").appendChild(log);
        // log.innerText = `Cash Out: ${cashOutAmount} TK. New Balance: ${updateBalance}`;
        // console.log(log);
        // document.getElementById("transaction-container").appendChild(log);
    }
    else {
        alert("wrong pin number");
    }
})