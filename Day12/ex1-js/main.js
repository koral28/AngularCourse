function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.add = function () {
  return this.a + this.b;
};
Calculator.prototype.subtract = function () {
  return this.a - this.b;
};
Calculator.prototype.multiply = function () {
  return this.a * this.b;
};
Calculator.prototype.log = function () {
  console.log(`${this.a} + ${this.b} = ${this.add(this.a, this.b)}`);
  console.log(`${this.a} - ${this.b} = ${this.subtract(this.a, this.b)}`);
  console.log(`${this.a} * ${this.b} = ${this.multiply(this.a, this.b)}`);
};

let res1 = new Calculator(5, 10);
let res2 = new Calculator(7, 2);

res1.log();

setTimeout(function () {
  res2.log();
}, 2000);
