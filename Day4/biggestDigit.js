//? finfd the biggest digit in the given number

function biggest(n){
    let big=0
    do{
        let reminder=n%10;
        if(reminder>big)
        {
            big=reminder
        }
        let n=Math.floor(n/10)
    }while(n!=0)
    console.log(`the biggest digit is ${big}`);
}
biggest(4567)