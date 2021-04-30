let message,login=null;

(login == 'Employee')
? message = 'Hello'
: (login == 'Director')
? message = 'Greetings'
: (login == '')
? message = 'No login'
: message = ''
console.log(message)
