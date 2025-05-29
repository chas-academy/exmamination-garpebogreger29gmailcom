const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const transactions = [];

function updatePage(transaction) {
  const transactionLi = document.getElementById("transactionList");
  const transactionLiItem = document.createElement("li");
  transactionLiItem.innerText = `${transaction.description}: ${transaction.amount} kr`;
  transactionLi.appendChild(transactionLiItem);

  if (transaction.type === "income") {
    const incomeList = document.getElementById("incomeList");
    const incomeItem = document.createElement("li");
    incomeItem.innerText = `${transaction.description} - ${transaction.amount} kr (Inkomst)`;
    incomeList.appendChild(incomeItem);
  } else {
    const expenseList = document.getElementById("expenseList");
    const expenseItem = document.createElement("li");
    expenseItem.innerText = `${transaction.description} - ${transaction.amount} kr (Utgift)`;
    expenseList.appendChild(expenseItem);
  }

  updateBalance();
}

function updateBalance() {
  const balance = document.getElementById("balance");
  const total = transactions.reduce((sum, t) => {
    return t.type === "income" ? sum + t.amount : sum - t.amount;
  }, 0);
  balance.textContent = total;
}

incomeBtn.addEventListener("click", () => {
  const description = descInput.value.trim();
  const amount = parseFloat(amountInput.value);
  if (description && !isNaN(amount)) {
    const transaction = { description, amount, type: "income" };
    transactions.push(transaction);
    updatePage(transaction);
  }
});

expenseBtn.addEventListener("click", () => {
  const description = descInput.value.trim();
  const amount = parseFloat(amountInput.value);
  if (description && !isNaN(amount)) {
    const transaction = { description, amount, type: "expense" };
    transactions.push(transaction);
    updatePage(transaction);
  }
});