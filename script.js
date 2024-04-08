function fibonacci(num) {
// your code here
  let a = 0;
  let b = 1;
  let c;
	if (num==1) {
		  return a;
	 }
	  else if (num==2) {
		  return b;
	  }
      else {
		   for (let i = 3; i <= num; i++) { 
	        c = a + b;
            a = b;
            b = c;
  }
      return c;
	  }
 }

module.exports = fibonacci;
