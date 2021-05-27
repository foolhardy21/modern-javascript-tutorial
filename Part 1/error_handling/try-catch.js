class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = 'format error'
    
  }
}

let err = new FormatError('formatting error')

console.log(err.message)
console.log(err.name)
console.log(err.stack)
