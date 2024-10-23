//? print the frequency of all element in the given array

function frequency(arr){
    let obj={}
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]=obj[arr[i]]+1
        }
    }
    return obj
}
console.log(frequency([1,2,3,1,3,2]));