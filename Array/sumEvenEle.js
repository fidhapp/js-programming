//? find the sum of even elements in the given array

function count(arr){
    let Res=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            Res++
        }
    }
    console.log(Res);
}
count([32,32,53,13])
``