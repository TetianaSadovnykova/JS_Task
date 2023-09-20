function bank(name, country, number_of_clients) {
    this.name = name;
    this.country = country;
    this.number_of_clients = number_of_clients;
}

function bank_account(bank, balance) {
    this.bank = bank;
    this.balance = balance;
}

const person = {
    name: prompt("Enter your name:"),
    last_name: prompt("Enter your last name:"),
    date_of_birth: prompt("Enter your date of birth (YYYY-MM-DD):"),
    bank_accounts: [],

    deposit: function(bank_name, amount) {
        const bankAccount = this.bank_accounts.find((acc) => acc.bank.name == bank_name);

        if (bankAccount) {
            bankAccount.balance += amount;
            console.log(`$${amount} are deposited into ${bank_name} account.`);
        }
        else console.log(`Bank account (${bank_name}) was not found.`);
    },

    withdraw: function(bank_name, amount) {
        const bankAccount = this.bank_accounts.find((acc) => acc.bank.name == bank_name);

        if (bankAccount) {
            if (bankAccount.balance >= amount) {
                bankAccount.balance -= amount;
                console.log(`$${amount} are withdrawn from ${bank_name} account.`);
            }
            else console.log("There isn't enough money to withdraw.");
        }
        else console.log(`Bank account (${bank_name}) was not found.`);
    },

    getAge: function() {
        const birthDate = new Date(this.date_of_birth);
        const nowDate = new Date();
        const age = nowDate.getFullYear() - birthDate.getFullYear();

        if (nowDate.getMonth() < nowDate.getMonth() || (nowDate.getMonth() == birthDate.getMonth() &&
            nowDate.getDate() < birthDate.getDate()))
            return age - 1;
        else return age;
    }
}

const bank1_name = prompt("Please, enter the name of the first bank:");
const bank1_country = prompt("Please, enter the country of the first bank:");
const bank1_number_of_clients = +prompt("Please, enter the number of clients of the first bank:");
const bank1_balance = +(prompt("Please, enter the balance of the first bank account:"));

const bank2_name = prompt("Please, enter the name of the second bank:");
const bank2_country = prompt("Please, enter the country of the second bank:");
const bank2_number_of_clients = +prompt("Please, enter the number of clients of the second bank:");
const bank2_balance = +(prompt("Please, enter the balance of the second bank account:"));

const bank1 = new bank(bank1_name, bank1_country, bank1_number_of_clients);
const bank2 = new bank(bank2_name, bank2_country, bank2_number_of_clients);

person.bank_accounts.push(new bank_account(bank1, bank1_balance));
person.bank_accounts.push(new bank_account(bank2, bank2_balance));

const bank_to_deposit = prompt("Please, enter the name of the bank  you want to deposit into:");
const deposit_amount = +(prompt("Please, enter the amount you want to deposit:"));
person.deposit(bank_to_deposit, deposit_amount);

const bank_to_withdraw = prompt("Please, enter the name of the bank  you want to withdraw from:");
const withdraw_amount = +(prompt("Please, enter the amount you want to withdraw:"));
person.withdraw(bank_to_withdraw, withdraw_amount);

const age = person.getAge();
console.log(`The age is: ${age} years`);

console.log("The new balances of bank accounts are:");
person.bank_accounts.forEach((acc) => console.log(`${acc.bank.name}: $${acc.balance}`));