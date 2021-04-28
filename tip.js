function getTip()
{
    var tip = document.getElementById('tip-amount').value;
    var bill = Number(document.getElementById('total-amount').value);

    var tipAmount = (tip/100) * bill
    var finalBill = tipAmount + bill;
    console.log(finalBill);

    var roundedBill = finalBill.toFixed(2);

    alert("Your total after tipping is: $" + roundedBill);

}
