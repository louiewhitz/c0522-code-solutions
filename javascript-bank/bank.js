/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    this.nextAccountNumber++;
    account.deposit(balance);
    this.accounts.push(account);
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    var match = this.accounts[i];
    if (match.number === number) {
      return match;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    total += account.getBalance();

  }
  return total;
};

// must have a list of all accounts
// must add new accounts if value is checked to be a number greater than 1 and not something else
// Can close an account
// you have a bank account holder and you have their balance
