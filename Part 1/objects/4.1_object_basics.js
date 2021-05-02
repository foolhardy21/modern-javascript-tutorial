let schedule ={}

console.log( isEmpty(schedule) )

schedule["8:30"] = "get up"

console.log( isEmpty(schedule) )

function isEmpty(schedule) {
  var counter = 0

  for(var key in schedule){
    counter++;
  }
  return counter === 0 ? true : false
}
