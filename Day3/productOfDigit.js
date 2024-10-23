//? find the product of digits

function digitSum(n){
    let product=1
    do{
        let reminder=n%10;
        product=product*reminder;
        n=Math.floor(n/10)
    }while(n!==0)

    console.log(product);
}
digitSum(127634)