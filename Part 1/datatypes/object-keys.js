function sumSalaries(salaries) {

  let values = Object.values(salaries)
  console.log(values)

  return values.reduce(function(total,current) {
    return total+=current;
  },0)
  
}

console.log( sumSalaries({
  "John": 100,
  "Pete": 300,
  "Mary": 250
}) );
