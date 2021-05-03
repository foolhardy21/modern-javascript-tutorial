function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function() {
    if(process.argv[2] !== undefined) {
        this.value+=(+process.argv[2])
    }
  }
}

var accumulator = new Accumulator(1)
accumulator.read()
console.log(accumulator.value)
