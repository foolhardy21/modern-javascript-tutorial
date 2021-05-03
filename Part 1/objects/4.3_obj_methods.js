function makeUser() {
  return {
    name: 'John',
    ref: this
  }
}

var user = makeUser()

console.log(user.ref.name)
