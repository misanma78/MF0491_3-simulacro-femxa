// ¡Buena suerte!
const billInput = document.getElementById(`bill`);
const tipInput = document.getElementById(`tip`);
const calculate = document.getElementById(`calculate`);
const total = document.getElementById(`total`);

function calaculateTotal(){

    const billAmount = parseFloat (billInput.value);
    const tipPercentage = parseFloat (tipInput.value);

if (isNaN(billAmount) || isNaN(tipPercentage) ) {
    alert("Please enter valid numbers in both fields.");
        return;
}

const tipAmount = billAmount * (tipPercentage / 100);
const totalAmount = billAmount + tipAmount;
total.textContent = totalAmount.toFixed(2);

}
calculate.addEventListener (`click`, calaculateTotal);