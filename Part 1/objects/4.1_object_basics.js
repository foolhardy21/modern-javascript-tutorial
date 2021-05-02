let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

var totalSal = 0

for(key in salaries) {
    totalSal+=salaries[key]
}

console.log(totalSal)
