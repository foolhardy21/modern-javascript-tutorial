function Calculator() {
  this.read = function() {
    this.val1 = +process.argv[2]
    this.val2 = +process.argv[3]
  }

  this.sum = function() {
    return this.val1+this.val2
  }
  this.mul = function() {
    return this.val1*this.val2
  }
}

var cal = new Calculator()
cal.read()
console.log(cal.sum())
console.log(cal.mul())
