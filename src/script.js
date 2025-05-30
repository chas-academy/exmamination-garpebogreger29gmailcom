let balance = 0;

function updateBalance() {
  const balanceElement = document.getElementById("balance");
  if (balanceElement) {
    balanceElement.textContent = balance;
  }
}

function updatePage(transaction, type) {
  const transactionList = document.getElementById("transactionList");
  const incomeList = document.getElementById("incomeList");
  const expenseList = document.getElementById("expenseList");

  if (!transactionList || !incomeList || !expenseList) return;

  const item = document.createElement("li");
  item.innerText = `${transaction.description} - ${transaction.amount} kr (${type})`;

  const itemSimple = document.createElement("li");
  itemSimple.innerText = `${transaction.description}: ${transaction.amount} kr`;

  transactionList.appendChild(item);
  if (type === "Inkomst") {
    incomeList.appendChild(itemSimple);
  } else {
    expenseList.appendChild(itemSimple);
  }

  updateBalance();
}

function setup() {
  const descInput = document.getElementById("desc");
  const amountInput = document.getElementById("amount");
  const incomeBtn = document.getElementById("incomeBtn");
  const expenseBtn = document.getElementById("expenseBtn");

  if (!descInput || !amountInput || !incomeBtn || !expenseBtn) return;

  incomeBtn.addEventListener("click", function () {
    const description = descInput.value;
    const amount = amountInput.value;

    if (description !== "" && amount !== "") {
      balance += +amount;
      updatePage({ description, amount }, "Inkomst");
    }
  });

  expenseBtn.addEventListener("click", function () {
    const description = descInput.value;
    const amount = amountInput.value;

    if (description !== "" && amount !== "") {
      balance -= +amount;
      updatePage({ description, amount }, "Utgift");
    }
  });
}

// Only auto-run in browser (not in Jest)
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", setup);
}
