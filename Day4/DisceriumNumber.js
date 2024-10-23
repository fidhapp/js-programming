//? find the descerium number?

//! a number is said to be descerium number when the sum of its digits raised to the power of thier respective position = number it self

function descerium(n){
    sum=0
    count=countDigit(n)
    temp=n
    do{
        let reminder=n%10
        sum=sum+reminder**count
        count--
        n=Math.floor(n/10)
    }while(n!=0)
    if(sum==temp){
        console.log("the given number is a descerium number");
    }else{
        console.log("the given number is not a descerium number");
    }
}
descerium(89)

function countDigit(n){
    let i=0
    do{
        n=Math.floor(n/10)
        i++
    }while(n!==0)
    // console.log(`the number of digits = ${i}`);
    return i;
}