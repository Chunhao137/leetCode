//recursive 

var fibonacci = function(n){
	if(n===0){
		return 0
	}else{
		return n===1?1:fibonacci(n-1)+fibonacci(n-2);
	}
}

//fast 

var fibonacci = function(n){
	fib = [0,1];
	for(; n>1;n--){
		fib.push(fib.shift()+fib[0]);
	}
	return fib[n]
}