//? given a strictly increasing array check if the target is present, if present return the index position .
//? if the target not found find the index to fit the elements


function missing(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=key){
            return i
        }
    }
    return arr.length;
}
console.log(missing([1,2,4,5],0));