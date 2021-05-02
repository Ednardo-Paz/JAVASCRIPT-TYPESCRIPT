function FizzBuss(n) {
  if (typeof n !== `number`) return n;
  if (n % 3 === 0 && n % 5 === 0) return `FizzBuzz`;
  if (n % 3 === 0) return `fizz`;
  if (n % 5 === 0) return `Buss`;
  return n;
}console.log(`a`, FizzBuss(`a`))
for(let i = 0; i < 100; i++){
  console.log(i, FizzBuss(i))
}