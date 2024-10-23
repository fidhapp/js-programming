//? replace the duplicate elements in an array with -

// [1,0,1,2,0, 3,3]  =  [1, 0, _, 2, _, 3, _]

function duplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr[j]="_"
            }
        }
    }
    console.log(arr);
}
duplicate([1,0,1,2,0,3,3])