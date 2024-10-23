//? check if the consequtive elements are grerater than or not

function conseq(arr){
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]<=arr[i+1] && arr[i+1]<=arr[i+2]){
            return [arr[i],arr[i+1],arr[i+2]]
        }
    }
    return -1
}
console.log(conseq([5,2,6,7,8]));