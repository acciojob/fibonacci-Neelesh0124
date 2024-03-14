function fibonacci(num) {
// your code here
  let a = 0;
  let b = 1;
  let fib;
	if (num==1) {
		  return a;
	 }
	  
      else {
		   for (let i = 2; i <= num; i++) { 
	        fib = a + b;
            a = b;
            b = fib;
  }
      return fib;
	  }
 }

module.exports = fibonacci;
