//? covert the given binary number to decimal number

function BinaryToDecimal(n){
    let num=0;
    let power=0;
    while(n!=0)
    {
        let rem=n%10;
        num+=rem*(2**power);
        n=Math.floor(n/10)
        power++
    }
    console.log(num);
}
BinaryToDecimal(1100)