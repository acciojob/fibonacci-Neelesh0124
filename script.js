function fibonacci(num) {
// your code here
	 if (num==1) {
		 return 0;
	 }
	 else if (num==2) {
		 return 1;
	 	
	 }
	else{
		return Fibonacci(num-1)+Fibonacci(num-2);
	}
	
	}

module.exports = fibonacci(n);
