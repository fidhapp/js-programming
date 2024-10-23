//? sum of digits of a number

// function digitSum(n){
//     let sum=0
//     do{
//         let reminder=n%10;
//         sum=sum+reminder;
//         n=Math.floor(n/10)
//     }while(n!==0)
//         console.log(sum);
// }
// digitSum(127634)

//?-----------------negative and positive numbers ---------------------------------


function sumOfDigits(n){
    let sum=0;
    let isnegative=false;
    if(n<0){
        isnegative=true;
        n=-1*n
    }
    do{
        let rem=n%10
        if(isnegative && n<10){
            sum=sum-rem
        }
        else{
            sum=sum+rem
        }
        n=Math.floor(n/10)
    }while(n!==0)
    return sum    
}
console.log(sumOfDigits(-456));


