let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let persons = Object.entries(salaries);
  let maxSal=-1;
  let maxName=null;

  for(const [name,sal] of persons) {
    if(sal>maxSal) {
      maxSal = sal;
      maxName=name;
    }
  }
  return maxName;
}

console.log( topSalary(salaries) )
