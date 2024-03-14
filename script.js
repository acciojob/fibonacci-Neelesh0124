function fibonacci(num) {
// your code here
  let a = 0;
  let b = 1;
  let fib;
	if (num==1) {
		  return a;
	 }
	  else if (num==2) {
		  return b;
	  }
      else {
		   for (let i = 3; i <= num; i++) { 
	        fib = a + b;
            a = b;
            b = fib;
  }
      return fib;
	  }
 }

module.exports = fibonacci;
