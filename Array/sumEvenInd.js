//? find the sum of even Index in the given array

function sum(arr){
    let Res=0;
    for(let i=0; i<arr.length; i++){
        if(i%2==0){
            Res+=arr[i]
        }
    }
    console.log(Res);
}
sum([32,32,53,13])