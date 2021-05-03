var user = {
  name: 'John'
};

var user_copy = user;       //ADDRESS(REFERENCE) IS COPIED AND
                            //NOT THE OBJECT

user_copy.name = 'Not John' //ORIGINAL REFERENCE IS UPDATED
console.log(user.name)
