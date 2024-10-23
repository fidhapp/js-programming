//! merge the 2 sorted array in such a way that the result should also be sorted
// output=[1, 4, 5, 6, 7, 8, 9]

function merge(arr1,arr2){
    let res=[]
    let i=0
    let j=0
    while(i<arr1.length || j<arr2.length){
        if(i<arr1.length && j<arr2.length){
            if(arr1[i]<=arr2[j]){
                res.push(arr1[i]);
                i++;
            }
            else{
                res.push(arr2[j]);
                j++
            }
        }
        else{
            if(i<arr1.length){
                res.push(arr1[i])
                i++
            }
            if(j<arr2.length){
                res.push(arr2[j])
                j++
            }
        }
    }
    return res
}
console.log(merge([5,7,8,9],[1,4,6]));