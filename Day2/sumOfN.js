//? find the sum of all natural numbers upto n

function sumOf(n){
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
    console.log(sum);
}
sumOf(6)