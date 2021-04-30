let login = prompt('Who is there?')

if(login === 'Admin'){
  let pass = prompt('Password?')
  if(pass === 'TheMaster')
  alert('Welcome')
  else if(pass === '' || pass === null)
  alert('Cancelled')
  else
  alert('Wrong Password')

}
else if(login === '' || login === null)
alert('Cancelled')
else
alert('I dont know you')
