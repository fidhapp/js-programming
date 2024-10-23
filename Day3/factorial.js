//? find the factorial of the given number


function factorial(n){
    let fact=1
    if(n==0){
        console.log(0);
    }else{
        for(let i=1;i<=n;i++){
            fact=fact*i
        }
        console.log(fact);
    }
}
factorial(5)