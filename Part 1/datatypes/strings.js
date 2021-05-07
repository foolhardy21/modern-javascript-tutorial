const truncate = (str,length) => {
  if(str.length+1>length) {
     return str.slice(0,length)
  }
}

console.log(truncate('free rabbit',3)+'...')
