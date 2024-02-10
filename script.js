function fibonacci(num) {
// your code here
	 let a=0;
	 let b=a+1;
	 if (num==1) {
		 return a;
	 }
	 else if (num==2) {
		 return b;
	 	
	 }
	else{
		return Fibonacci(num-1)+Fibonacci(num-2);
	}
	
	}

module.exports = fibonacci;
