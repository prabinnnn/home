let num = 32243;
function myreversenumber(num) {
  let rev = 0;
  while (num !== 0) {
    rev = rev * 10 + (num % 10);
    math = Number(num / 10);
  }
  return math;
}
myreversenumber(num);
