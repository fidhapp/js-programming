//? insert the given element at a given position inside the array

function insertion(arr,pos,ele){
    if(pos>0 && pos<arr.length){
        for(let i=arr.length; i>=pos;i--){
            arr[i]=arr[i-1]
        }
        arr[pos-1]=ele
    }
    console.log(arr);
}
insertion([1,2,3,4,5],2,100)