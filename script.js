function fibonacci(num) {
// your code here
	let fibo1=0;
	let fibo2=1;
	if(num==1){
		return foibo1;
	}
	else if (num==2){
		return fibo2;
	}
    let fnlfibo=0;
	for(let i=3; i<=num; i++){
		fnlfibo=fibo1+fibo2;
		fibo1=fibo2;
		fibo2=fnlfibo;
	}
	return fnlfibo;
}

module.exports = fibonacci;
