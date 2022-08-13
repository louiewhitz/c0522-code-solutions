/* exported calculator */
var calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
  sumAll(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  },
  getAverage(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
      var average = total / numbers.length;
    }
    return average;
  }
};
