// get the btn and add eventlistener to withdraw input field btn
document.getElementById('btn-withdraw').addEventListener("click", function() {

    // getting withdraw field and value and parsing to number from string
    let withdrawfield = document.getElementById('withdraw-field');
    let withdrawFieldValue = parseFloat(withdrawfield.value);

    withdrawfield.value = "";

    if (isNaN(withdrawFieldValue)) {
        alert('Please Provide a Valid Number')
        return;
    }


    // getting withdraw cureent balance value and parsing to number from string
    let withdrawUpdatingElement = document.getElementById('withdraw-updating');
    let withdrawUpdatingText = parseFloat(withdrawUpdatingElement.innerText);



    // getting balance value and parsing to number from string
    let depositBalanceElement = document.getElementById('balance-updating');
    let depositBalanceText = parseFloat(depositBalanceElement.innerText);




    if (withdrawFieldValue > depositBalanceText) {
        alert("Balance is not sufficient")
        return;
    }

    // calculate and update the withdraw amount 
    let withdrawTotalUpdating = withdrawUpdatingText + withdrawFieldValue;
    withdrawUpdatingElement.innerText = withdrawTotalUpdating;


    // calculate and update the withdraw amount in balance 
    let withdrawTotalAmount = depositBalanceText - withdrawFieldValue;
    depositBalanceElement.innerText = withdrawTotalAmount;


    // clear withdraw value after clicking btn

})