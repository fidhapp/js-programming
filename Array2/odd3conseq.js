//? check whether the 3 consequtive elements are odd or not in the given array

function oddConsq(arr){
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]%2!==0 && arr[i+1]%2!==0 && arr[i+2]%2!==0){
                return [arr[i],arr[i+1],arr[i+2]]
        }
        
    }
    return -1
}
console.log(oddConsq([1,2,3,5,7]));