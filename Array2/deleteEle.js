//? delete any element from the position? 

function deleteFromArray(arr,pos){
    if(pos>0 && pos<arr.length){
        for(let i=arr.length; i>=pos;i--){
            arr[i]=arr[i-1]
        }
    }
    console.log(arr);
}
deleteFromArray([1,2,3,4,5],2)