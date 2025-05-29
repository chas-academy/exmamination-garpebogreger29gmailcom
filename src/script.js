const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const transactions = [];

function updatePage(transaction) {
  const transactionLi = document.getElementById("transactionList");
  const transactionLiItem = document.createElement("li");
  transactionLiItem.innerText = transaction.description + ": " + transaction.amount + " kr";
  transactionLi.appendChild(transactionLiItem);

  if (transaction.type === "income") {
    const incomeList = document.getElementById("incomeList");
    const incomeItem = document.createElement("li");
    incomeItem.innerText = transaction.description + " - " + transaction.amount + " kr (Inkomst)";
    incomeList.appendChild(incomeItem);
  } else {
    const expenseList = document.getElementById("expenseList");
    const expenseItem = document.createElement("li");
    expenseItem.innerText = transaction.description + " - " + transaction.amount + " kr (Utgift)";
    expenseList.appendChild(expenseItem);
  }

  updateBalance();
}

function updateBalance() {
  const balanceElement = document.getElementById("balance");
  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];
    if (t.type === "income") {
      total = total + t.amount;
    } else {
      total = total - t.amount;
    }
  }

  balanceElement.textContent = total;
}

incomeBtn.addEventListener("click", function () {
  const description = descInput.value;
  const amount = +amountInput.value;

  if (description !== "" && amount !== 0) {
    const transaction = {
      description: description,
      amount: amount,
      type: "income"
    };
    transactions.push(transaction);
    updatePage(transaction);
  }
});

expenseBtn.addEventListener("click", function () {
  const description = descInput.value;
  const amount = +amountInput.value;

  if (description !== "" && amount !== 0) {
    const transaction = {
      description: description,
      amount: amount,
      type: "expense"
    };
    transactions.push(transaction);
    updatePage(transaction);
  }
});