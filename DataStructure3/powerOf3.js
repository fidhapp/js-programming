//? check if the given number is a power of 3

function power(n){
    while(n%3===0){
        n=n/3
    }
    if(n==1){
        console.log("the number is a power of 3");
    }else{
        console.log("the number is not a power of 3");
    }
}
power(64)