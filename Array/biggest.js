//? print the biggest element in the given array?


function biggest(arr){
    let big=arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>big){
            big=arr[i]
            break
        }
    }
    console.log(`the biggest amoung the array elements ${big}`);
}
biggest([163,25,38,132,82])