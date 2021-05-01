let age = +prompt('Enter your age','')
checkAge(age)

function checkAge(age){
  return age>18 ? true : confirm('Did parents allow you?')
}
