function calculateTax(income, expense) {
    if (income < 0 || expense < 0 || expense > income) {
        return "Invalid Input"
    }
    const harunNetIncome = income - expense;
    const theTaxHarunGive = harunNetIncome * 20 / 100;
    return theTaxHarunGive;
}

const monthlyIncome = 18000;
const monthlyExpense = 15000;
const theTaxHarunGive = calculateTax(monthlyIncome, monthlyExpense);
console.log(theTaxHarunGive);
