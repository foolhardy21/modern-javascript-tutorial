var user = {
  name: 'John',
  age: 30
};

var user_copy = {};            //DIFFERENT ADDRESS

for(var key in user) {        //REPLICATION INTO NEW OBJECT
  user_copy[key] = user[key]
}

user_copy.age = 40
console.log('original object',user.age)   //NO CHANGE IN ORIGNIAL
console.log('clone object',user_copy.age)
