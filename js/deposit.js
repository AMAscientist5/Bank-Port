// get the btn of deposit field 
document.getElementById('btn-deposit').addEventListener('click', function() {

    // getting deposit field and parsing to number from string
    let depositField = document.getElementById('deposit-field');
    let depositFieldValue = parseFloat(depositField.value);


    // getting updating value and parsing to number from string
    let depositUpdatingelement = document.getElementById('deposit-updating');
    let depositUpdatingeText = parseFloat(depositUpdatingelement.innerText);

    // add to input value and previous amount of deposit update section
    let totalUpdateAmount = depositUpdatingeText + depositFieldValue;
    depositUpdatingelement.innerText = totalUpdateAmount;


    // getting balance value and parsing to number from string
    let depositBalanceElement = document.getElementById('balance-updating');
    let depositBalanceText = parseFloat(depositBalanceElement.innerText);


    // add of input value and previous amount of balance section
    let totalBalanceAmount = depositBalanceText + depositFieldValue;
    depositBalanceElement.innerText = totalBalanceAmount;




    //    deposit field clear 
    depositField.value = "";


})







// let depositUpdatingelement = document.getElementById('deposit-updating');
// let depositUpdatingTextString = depositUpdatingelement.innerText;

// let depositUpdate = parseFloat(depositUpdatingTextString);
// let totalEndUpdate = depositUpdate + depositFieldValue;

// // let updateTotal = depositFieldValue + depositUpdate;

// depositUpdate.innerText = depositFieldValue;