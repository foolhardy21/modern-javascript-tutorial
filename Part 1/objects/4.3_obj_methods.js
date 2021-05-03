function makeUser() {
  return {
    name: 'John',
    ref() {
      return this
    }
  }
}

var user = makeUser()

console.log(user.ref().name)
