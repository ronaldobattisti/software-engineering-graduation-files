class ClientAccount {
    constructor(accNumber, balance, debit, credit) {
        this.accNumber = accNumber;
        this.balance = balance;
        this.credit = credit;
        this.debit = debit;
    }

    calculateCurrentBalance() {
        return this.balance - this.debit + this.credit;
    }

    verifyBalance() {
        const currentBalance = this.calculateCurrentBalance();
        if (currentBalance >= 0) {
            alert("Positive Balance: R$ " + currentBalance);
        } else alert("Negative Balance: R$ " + currentBalance);
    }
}

let accNumber = prompt("Input client's account number: ");
let balance = parseFloat(prompt("Input client's balance: "));
let debit = parseFloat(prompt("Input client's debit: "));
let credit = parseFloat(prompt("Input client's credit: "));

let account = new ClientAccount(accNumber, balance, debit, credit);

account.verifyBalance();