const promise = new Promise(function(resolve,reject) {
  resolve(1)
})

promise.then((result) => {
  console.log(result)
  return result+1
})
.then((result) => {
  console.log(result)
  return result+1
})
