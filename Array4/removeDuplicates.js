//? remove the duplicate elements from the array


function removeDuplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                for(let k=j;k<arr.length-1;k++){
                    arr[k]=arr[k+1]
                }
                arr.pop()
                j--;
            }
        }
    }
    return arr
}
console.log(removeDuplicate([1,0,1,2,0,3,3]));
