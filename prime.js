let c;
let n = Number(prompt("enter the number"));
function checkprime(n, i) {
  if (n <= 1) {
    console.log("it is not prime number");
  }
  for (let i = 2; i <= n; i++) {
    c++;
  }
  return i % n == 0;
}
let e = c === 0 ? console.log("it is prime") : console.log("it is not");
console.log(e);
checkprime(n);
