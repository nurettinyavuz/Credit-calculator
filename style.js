function Calculate() {
  let drawn, maturity;
  let installment, totalpayable, InterestAmount;

  let sonucDiv = document.getElementById("sonuc");

  drawn = document.getElementById("amount").value;
  //  FaizOrani=document.getElementById("oran").value;

  let list = document.getElementById("listeVade");
  maturity = list.options[list.selectedIndex].value;

  if (maturity == 12) {
    totalpayable = drawn * 1.4;
    InterestAmount = totalpayable - drawn;
  } else if (maturity == 24) {
    totalpayable = drawn * 1.5;
    InterestAmount = totalpayable - drawn;
  } else if (maturity == 36) {
    totalpayable = drawn * 1.6;
    InterestAmount = totalpayable - drawn;
  } else if (maturity == 48) {
    totalpayable = drawn * 1.7;
    InterestAmount = totalpayable - drawn;
  } else if (maturity == 60) {
    totalpayable = drawn * 1.8;
    InterestAmount = totalpayable - drawn;
  }

  installment = totalpayable / maturity;

  sonucDiv.innerHTML =
    "Total Amount to be Reimbursed: " +
    totalpayable +
    "<br><br> Monthly amount you have to pay: " +
    installment +
    "<br><br> Interest Amount Payable: " +
    InterestAmount;
}
