//? find all the divisor of the number

function divisor(n){

    for(let i=1;i<=Math.floor(n / 2);i++)
        if(n%i==0){
            console.log(i);
        }
}
divisor(28)