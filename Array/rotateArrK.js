//? rotate the given string k number of times

function rotate(arr,k){
    k=k%arr.length;
    for(let i=0 ; i<k ; i++){
        let temp=arr[arr.length-1]
        for(let j=arr.length-1 ; j>0 ; j--){
            arr[j]=arr[j-1]
        }
        arr[0]=temp 
    }
    console.log(arr);
}
rotate([1,2,3,4,5],7)