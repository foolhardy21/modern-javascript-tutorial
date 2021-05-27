function delay(ms) {
  const promise = new Promise(function(resolve,reject) {
    setTimeout(() => resolve('ok'),ms)
  })
  return promise
}

delay(3000).then(() => console.log('runs after 3 seconds'));
