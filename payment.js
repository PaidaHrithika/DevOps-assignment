function confirmPayment() {
    const paymentOptions = document.getElementsByName('payment');
    let selectedOption = '';

    for (let i = 0; i < paymentOptions.length; i++) {
        if (paymentOptions[i].checked) {
            selectedOption = paymentOptions[i].value;
            break;
        }
    }

    switch (selectedOption) {
        case 'upi':
            window.location.href = 'upi.html';
            break;
        case 'creditCard':
            window.location.href = 'creditCard.html';
            break;
        case 'cashOnDelivery':
            window.location.href = 'order.html';
            break;
        default:
            displayMessage('Please select a payment option.');
    }
}
function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}
function creditCardfun() {
    // Redirect to shopping page

    window.location.href = 'upi.html';
}