//? check if the given number is strong number or not

//! it is the sum of the factorial of the digits of the number

let n=145
let sum=0
let temp=n
do{
    let rem=n%10
    sum=sum+factorial(rem)
    n=Math.floor(n/10)
}while(n!=0)
console.log(sum==temp);

function factorial(n){
    let fact=1
    if(n==0){
        return 0;
    }else{
        for(let i=1;i<=n;i++){
            fact=fact*i
        }
        return fact;
    }
}