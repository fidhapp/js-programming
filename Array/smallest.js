//? print the smallest element in the given array?


function smallest(arr){
    let small=arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]<small){
            small=arr[i]
        }
    }
    console.log(`the smallest amoung the array elements ${small}`);
}
smallest([16,25,38,132,8])