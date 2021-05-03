var user = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50
  }
};

var clone = {};
Object.assign(clone,user)
clone.name = 'Not John'
clone.sizes.height = 90
console.log(user)
