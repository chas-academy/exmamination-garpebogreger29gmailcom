
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeButton = document.getElementById("incomeBtn");
const expenseButton = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balanceValue = document.getElementById("balance");

const incomes = [];
const expenses = [];

incomeButton.addEventListener("click", addIncome);
expenseButton.addEventListener("click", addExpense);

function addIncome() {
    const desc = descInput.value;
    const amount = Number(amountInput.value);

    if (desc !== "" && amount > 0) {
        const transaction = { description: desc, amount: amount, type: "income"};
        incomes.push(transaction);
        updatePage(transaction);
    }

    descInput.value = "";
    amountInput.value = "";
}


function addExpense() {
    const desc = descInput.value;
    const amount = Number(amountInput.value);

    if (desc !== "" && amount > 0) {
        const transaction = { description: desc, amount: amount, type: "expense"};
        expenses.push(transaction);
        updatePage(transaction);
    }

    descInput.value = "";
    amountInput.value = "";
}

function updatePage(transaction) {
  const li = document.createElement("li");
  const label = transaction.type === "income" ? "Inkomst" : "Utgift";
  li.innerText = `${transaction.description} - ${transaction.amount} kr (${label})`;

  if (transaction.type === "income") {
    incomeList.appendChild(li);
  } else {
    expenseList.appendChild(li);
  }

  if (transactionList) {
    const trLi = document.createElement("li");
    trLi.innerText = li.innerText;
    transactionList.appendChild(trLi);
  }

  updateBalance();
}

function updateBalance() {
    let totalIncome = 0;
    for (let income of incomes) {
        totalIncome += income.amount;
    }

    let totalExpense = 0;
    for (let expense of expenses) {
        totalExpense += expense.amount;
    }
      let balance = totalIncome - totalExpense;

      balanceValue.innerText = balance;
}