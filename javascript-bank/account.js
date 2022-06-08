/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(deposit);
    return true;
  }
  return false;

};
Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(withdrawal);
    return true;
  }
  return false;

};

Account.prototype.getBalance = function () {
  var total = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];

    if (transaction.type === 'deposit') {
      total += transaction.amount;
    }
    if (transaction.type === 'withdrawal') {
      total -= transaction.amount;
    }

  }
  return total;
};
// bank
