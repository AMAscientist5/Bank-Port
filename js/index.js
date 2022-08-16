document.getElementById('btn-form').addEventListener("click", function() {
    let emailValue = document.getElementById("emailUser");
    let evalue = emailValue.value;

    let passValue = document.getElementById("passUser");
    let pvalue = passValue.value;

    if (evalue == 'amaahmadmusa@gmail.com' && pvalue == '123#1131@') {
        location.href = 'bank.html'
    } else {
        console.log("invalid User");
    }

});