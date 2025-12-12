// 🏦 Bank and Account System
// Bank Class: Manages multiple accounts
class Bank {
  constructor() {
    this.accounts = []; // Stores all accounts in the bank
  }

  // Add methods here:
  // Example: createAccount(name, initialDeposit)
  createAccount(name, initialDeposit = 0) {
    const account = new Account(name, initialDeposit);
    this.accounts.push(this.account);
    return account;
  }
}

// Account Class: Represents a single user's account
class Account {
  constructor(name, balance = 0) {
    this.name = name; // Account holder's name
    this.balance = balance; // Initial balance (default is 0)
    this.transactionHistory = []; // Keeps a record of all transactions
  }

  // Add methods here:
  // Example: deposit(amount)
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit must be positive");
    }
    this.balance += amount;
    this.transactionHistory.push({
      transactionType: "DEPOSIT",
      amount: amount,
    });
    return this.balance;
  }
  // example data to be stored in transactionHistory { transactionType: 'Deposit', amount: 500 }

  // Example: withdraw(amount)
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("withdrawal must be positive");
    }
    if (amount > this.balance) {
      throw new Error("Inssuficient funds");
    }
    this.balance -= amount;
    this.transactionHistory.push({
      transactionType: "Withdraw",
      amount: amount,
    });
  }
  // example data to be stored in transactionHistory { transactionType: 'Withdrawal', amount: 200 }

  // Example: transfer(amount, recipientAccount)
  transfer(amount) {
    if (amount <= 0) {
      throw new Error("Transfer must be positive");
    }
    if (amount > this.balance) {
      throw new Error("Insuficient funds");
    }
    this.balance -= amount;
    this.transactionHistory.push({
      transactionType: transfer,
      amount: amount,
      to: recipientAccount.name,
    });
    recipientAccount.balance += amount;
    recipientAccount.transactionHistory.push({
      transactionType: "Received",
      amount: amount,
      from: this.name,
    });
  }

  // example data to be stored in transactionHistory:
  // for account sending { transactionType: 'Transfer', amount: 300, to: recipientName }
  // for account recieving { transactionType: 'Received', amount: 300, from: senderName }

  checkBalance() {
    return this.balance;
  }
}

//<-------------------------------DO NOT WRITE BELOW THIS LINE------------------------------>

// Function to test bank operations
function testBankOperations() {
  const bank = new Bank();

  // Create new accounts
  const johnAccount = bank.createAccount("John Doe", 1000);
  const janeAccount = bank.createAccount("Jane Doe", 500);
  console.log("Accounts created:", johnAccount, janeAccount);

  // Perform some operations on John's account
  johnAccount.deposit(500);
  johnAccount.withdraw(200);

  // Perform a transfer from John to Jane
  johnAccount.transfer(300, janeAccount);

  // Check balances
  const johnFinalBalance = johnAccount.checkBalance();
  const janeFinalBalance = janeAccount.checkBalance();
  console.log("John's balance:", johnFinalBalance);
  console.log("Jane's balance:", janeFinalBalance);

  // Return balances for testing
  return {
    johnFinalBalance,
    janeFinalBalance,
    johnTransactionHistory: johnAccount.transactionHistory,
    janeTransactionHistory: janeAccount.transactionHistory,
  };
}

module.exports = testBankOperations;

//<-------------------------------DO NOT WRITE ABOVE THIS LINE------------------------------>

console.log(testBankOperations());
