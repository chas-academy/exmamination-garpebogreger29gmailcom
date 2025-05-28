
const descriptionInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeButton = document.getElementById("incomeBtn");
const expenseButton = document.getElementById("expenseBtn");
const incomeLi = document.getElementById("incomeList");
const expenseLi = document.getElementById("expenseList");
const transactionLi = document.getElementById("transactionList");
const balanceValue = document.getElementById("balance");

const incomes = [];
const expenses = [];

incomeButton.addEventListener("click", addIncome);
expenseButton.addEventListener("click", addExpense);

function addIncome() {
    const desc = descriptionInput.value;
    const amount = Number(amountInput.value);

    if (desc !== "" && amount > 0) {
        const transaction = { description: desc, amount: amount, type: "income"};
        incomes.push(transaction);
        updatePage(transaction);
    }

    descriptionInput.value = "";
    amountInput.value = "";
}


function addExpense() {
    const desc = descriptionInput.value;
    const amount = Number(amountInput.value);

    if (desc !== "" && amount > 0) {
        const transaction = { description: desc, amount: -amount, type: "expense"};
        expenses.push(transaction);
        updatePage(transaction);
    }

    descriptionInput.value = "";
    amountInput.value = "";
}

function updatePage(transaction) {
    const li = document.createElement("li");
    li.innerText = `${transaction.description}: ${transaction.amount} kr`;

    if (transaction.type === "income") {
        incomeLi.appendChild(li);
    } else {
        expenseLi.appendChild(li);
    }

    const transactionLiItem = document.createElement("li");
    transactionLiItem.innerText = `${transaction.description}: ${transaction.amount} kr`;
    transactionLi.appendChild(transactionLiItem);

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
      let balance = totalIncome + totalExpense;

      balanceValue.innerText = balance;
}