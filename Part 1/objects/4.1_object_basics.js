user = {}

function printObject() {
  console.log(user)
}
printObject()
user['name'] = 'John'
printObject()
user['surname'] = 'Smith'
printObject()
user['name'] = 'Pete'
printObject()
delete user.name
printObject()
