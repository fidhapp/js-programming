//? check if the number is palindrome or not


function palindrome(n){
    let temp=n
    let reverse=0
    do{
        let reminder=n%10;
        reverse=reverse*10+reminder
        n=Math.floor(n/10)
    }while(n!==0)
    if(reverse==temp){
        console.log("palindrome");
    }else{
        console.log("not palindrome");
    }
    // return (temp==reverse)
}

palindrome(565)


// console.log(palindrome(565));