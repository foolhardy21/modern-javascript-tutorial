var name = {}

function A() {
  return name
}
function B() {
  return name
}

var a = new A()
var b = new B()

console.log(a==b)
