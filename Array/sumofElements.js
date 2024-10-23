//? fing the sum of elements in the array


function sum(arr){
    let Res=0;
    for(let i=0; i<arr.length; i++){
        Res+=arr[i]
    }
    console.log(Res);
}
sum([32,32,53,13])