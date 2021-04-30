let n = process.argv[2];

for(let i=2;i<=n;i++)
{
  let prime = true;
  for(let j=2;j<i;j++)
  {
    if(i%j==0){prime=false;break;}
  }
  if(prime)console.log(i)

}
