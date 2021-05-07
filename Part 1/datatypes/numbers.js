const random = (num1,num2) => {
  return Math.floor(Math.random()*(num2+1-num1))+num1
}

console.log(random(1,10))
