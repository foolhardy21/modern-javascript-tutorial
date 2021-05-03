var user = {
  name: 'John'
}

var permission1 = {
  canView: true
}

var permission2 = {
  canEdit: false
}

console.log(user)
Object.assign(user,permission1,permission2)
console.log(user)

//CHANGES IN ORIGINAL DOES NOT AFFECT THE CLONE
//BECASUE DIFFERENT ADDRESSES 
