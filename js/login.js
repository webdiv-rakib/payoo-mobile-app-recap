document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    console.log("log in button added");

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    if (pinNumber === '12345' && phoneNumber === '01794181719') {
        console.log("Logged in successfully");
        window.location.href = 'home.html'
    }
    else {
        alert("Wrong Phone Number or Pin try again");
    }
})