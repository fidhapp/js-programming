//? find the extreme sum and internal digit sum for a given number

function eachDigit(n){
    let i=0
    let e=0
    let temp=n
    do{
        let reminder=n%10;
        if(n==temp || n<10){
            e=e+reminder;
        }
        else
        {
            i=i+reminder
        }
        n=Math.floor(n/10)
    }while(n!==0)
    console.log(`the extreme sum of the digit is ${e}`);
    console.log(`the internal sum of the digit is ${i}`);
}
eachDigit(127634)