var calculator = {

  read() {
    calculator.val1 = +process.argv[2]
    calculator.val2 = +process.argv[3]
  },
  sum() {
    return this.val1+this.val2
  },
  mul() {
    return this.val1*this.val2
  }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
