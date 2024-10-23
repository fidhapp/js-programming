//? print each number in a given number

function eachDigit(n){
    do{
        let reminder=n%10;
        console.log(reminder);
        n=Math.floor(n/10)
    }while(n!==0)
}
eachDigit(127634)