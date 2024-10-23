//? covert the number from decimal number to binary number

function DecimalToBinary(n){
    let num="";
    if(n===0){
        return 0
    }
    while(n!=0){
        let rem=n%2;
        num=rem+num;
        n=Math.floor(n/2)
    }
    return num
}
console.log(DecimalToBinary(9));