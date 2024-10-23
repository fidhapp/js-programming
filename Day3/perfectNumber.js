//?  check the number is perfect or not

//! perfect number is a number which is the sum of all digits of the number

function divisor(n){
    let sum=0
    for(let i=1;i<=Math.floor(n / 2);i++){
        if(n%i==0){
            sum=sum+i;
        }
    }
        
    if(sum==n)
    {
        console.log("the given number is a perfect number");
    }
    else
    {
        console.log("the given number is not a perfect number");
    }
}
divisor(28)