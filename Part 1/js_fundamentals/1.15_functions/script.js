let a = +prompt('Enter a','')
let b = +prompt('Enter b','')
getMin(a,b)

function getMin(a,b){
  return a<b ? confirm('a is smaller') : confirm('b is smaller')
}
