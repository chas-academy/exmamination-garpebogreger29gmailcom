const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeUl = document.getElementById("incomeList");
const expenseUl = document.getElementById("expenseList");
const transactionUl = document.getElementById("transactionList");
const balanceElement = document.getElementById("balance");

let transactions = [];

function updatePage(transaction) {
  const formattedText = `${transaction.description} - ${transaction.amount} kr (${transaction.type === "income" ? "Inkomst" : "Utgift"})`;

  const li = document.createElement("li");
  li.innerText = formattedText;

  if (transaction.type === "income") {
    if (incomeUl) incomeUl.appendChild(li);
  } else if (transaction.type === "expense") {
    if (expenseUl) expenseUl.appendChild(li);
  }

  if (transactionUl) {
    const transactionLi = document.createElement("li");
    transactionLi.innerText = `${transaction.description}: ${transaction.amount} kr`;
    transactionUl.appendChild(transactionLi);
  }

  updateBalance();
}

function updateBalance() {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const total = income - expense;

  if (balanceElement) {
    balanceElement.textContent = total;
  }
}

function addTransaction(type) {
  const description = descInput?.value.trim();
  const amount = parseInt(amountInput?.value);

  if (!description || isNaN(amount)) return;

  const transaction = { description, amount, type };
  transactions.push(transaction);
  updatePage(transaction);
}

if (incomeBtn) {
  incomeBtn.addEventListener("click", () => addTransaction("income"));
}
if (expenseBtn) {
  expenseBtn.addEventListener("click", () => addTransaction("expense"));
}
