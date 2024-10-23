//? check if the given array is strictly increasing manner or not

// [1,2,3,4,5,6]  = strictly increasing
// [1,2,7,4,5,6]  = strictly increasing


function strictlyIncrease(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]<=arr[i]){
            return false
        }
    }return true
}
console.log(strictlyIncrease([1,1,3,4,5]));