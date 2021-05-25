let user = {
  name: 'John Smith',
  age: 35
};

console.log('json',JSON.stringify(user))
console.log('object',JSON.parse(JSON.stringify(user)))
