function fibonacci(num) {
// your code here
  let a = 0;
  let b = 1;
  let fib;
  for (let i = 0; i < num; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return a;
}
module.exports = fibonacci;
