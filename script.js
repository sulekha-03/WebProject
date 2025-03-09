document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your login logic here
    console.log('Login Attempt:', username, password);
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const workerType = document.getElementById('workerType').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    // Add your booking logic here
    console.log('Booking Details:', workerType, date, time);
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    // Add your payment logic here
    console.log('Payment Details:', cardNumber, expiryDate, cvv);
});