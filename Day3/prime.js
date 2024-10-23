//? check if the fgiven nymber is prime number of not


function prime(n){
    let isprime=false
    for(let i=2;i<Math.floor(n/2);i++){
        if(n%i==0){
            isprime=true
            console.log("the given number is not prime");
            break
        }
    }
    if(isprime===false)
    {
        console.log("the number is prime");
    }
}
prime(7)