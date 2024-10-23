//? pri t the adjucent element such that it's sum is equal to target \


//! always try to access the index from 1 to avoid the Nan situation at the end


let arr=[4, 8, 2, 1, 9]
let target = 10


function equalTarget(arr,target){
    for(let i=1; i<arr.length; i++){
        let sum=arr[i-1]+arr[i];
        if(target==sum){
            return [arr[i],arr[i-1]]
        }
    }
    return -1
}

res = equalTarget(arr,target)
console.log(res);