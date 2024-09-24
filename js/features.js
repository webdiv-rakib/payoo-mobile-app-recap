document.getElementById("add-money-button").addEventListener('click', function () {
    showSectionById("cash-add-form");
    // console.log("add money button clicked");
    // document.getElementById("cash-out-form").classList.add('hidden');
    // document.getElementById("cash-add-form").classList.remove('hidden');
})
document.getElementById("cash-out-button").addEventListener('click', function () {
    showSectionById("cash-out-form");
    // console.log("add money button clicked");
    // document.getElementById("cash-add-form").classList.add('hidden');
    // document.getElementById("cash-out-form").classList.remove('hidden');
})
document.getElementById("transaction").addEventListener('click', function () {
    showSectionById("transaction-form");
    // console.log("add money button clicked");
    // document.getElementById("cash-add-form").classList.add('hidden');
    // document.getElementById("cash-out-form").classList.remove('hidden');
})