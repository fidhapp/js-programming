//? check if the given element is found or not?

function findEle(arr,target){
    for(let i=1; i<arr.length; i++){
        if(arr[i]===target){
            return true
        }
    }return false
}
console.log(findEle([4,8,2,1,9],9));