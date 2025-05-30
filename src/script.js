const transactions = [];

function getElements() {
  return {
    descInput: document.getElementById("desc"),
    amountInput: document.getElementById("amount"),
    incomeButton: document.getElementById("incomeBtn"),
    expenseButton: document.getElementById("expenseBtn"),
    incomeList: document.getElementById("incomeList"),
    expenseList: document.getElementById("expenseList"),
    balanceValue: document.getElementById("balance"),
    transactionLi: document.getElementById("transactionList") // optional element
  };
}

function addIncome() {
  const { descInput, amountInput } = getElements();
  const desc = descInput.value;
  const amount = Number(amountInput.value);

  if (desc !== "" && amount > 0) {
    const transaction = { description: desc, amount: amount, type: "income" };
    transactions.push(transaction);
    updatePage(transaction);
    updateBalance();
  }
}

function addExpense() {
  const { descInput, amountInput } = getElements();
  const desc = descInput.value;
  const amount = Number(amountInput.value);

  if (desc !== "" && amount > 0) {
    const transaction = { description: desc, amount: amount, type: "expense" };
    transactions.push(transaction);
    updatePage(transaction);
    updateBalance();
  }
}

function updatePage(transaction) {
  const { incomeList, expenseList, transactionLi } = getElements();

  const li = document.createElement("li");
  const label = transaction.type === "income" ? "Inkomst" : "Utgift";
  li.innerText = `${transaction.description} - ${transaction.amount} kr (${label})`;

  if (transaction.type === "income") {
    incomeList.appendChild(li);
  } else {
    expenseList.appendChild(li);
  }

  if (transactionLi) {
    const trLi = document.createElement("li");
    trLi.innerText = li.innerText;
    transactionLi.appendChild(trLi);
  }
}

function updateBalance() {
  const { balanceValue } = getElements();

  let totalIncome = 0;
  let totalExpense = 0;

  for (let transaction of transactions) {
    if (transaction.type === "income") {
      totalIncome += transaction.amount;
    } else {
      totalExpense += transaction.amount;
    }
  }

  balanceValue.innerText = (totalIncome - totalExpense).toString();
}

// Attach event listeners after DOM is available
const { incomeButton, expenseButton } = getElements();
if (incomeButton && expenseButton) {
  incomeButton.addEventListener("click", addIncome);
  expenseButton.addEventListener("click", addExpense);
}
