//? find the factorial of the given number using recurssion

function factorial(n){
    if(n==0){
        return 1
    }
    return n*factorial(n-1);
}
console.log(factorial(5));