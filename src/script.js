const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balanceDisplay = document.getElementById("balance");

let balance = 0;

function updateBalance() {
  balanceDisplay.textContent = balance.toString();
}

function createTransaction(description, amount, type) {
  const li = document.createElement("li");

  if (type === "income") {
    li.textContent = `${description} - ${amount} kr (Inkomst)`;
    incomeList.appendChild(li);
    balance += +amount;
  } else {
    li.textContent = `${description} - ${amount} kr (Utgift)`;
    expenseList.appendChild(li);
    balance -= +amount;
  }

  const summaryItem = document.createElement("li");
  summaryItem.textContent = `${description}: ${amount} kr`;
  transactionList.appendChild(summaryItem);

  updateBalance();
}

incomeBtn.addEventListener("click", function () {
  const description = descInput.value;
  const amount = amountInput.value;

  if (description !== "" && amount !== "") {
    createTransaction(description, amount, "income");
  }
});

expenseBtn.addEventListener("click", function () {
  const description = descInput.value;
  const amount = amountInput.value;

  if (description !== "" && amount !== "") {
    createTransaction(description, amount, "expense");
  }
});
