//? binary search 


//?----------------------------ascending--------------------------------------------

// function binarySearch(arr,target){
//     start=0;
//     end=arr.length-1;
//     while(start<=end){
//         let mid=Math.floor((start+end)/2)
//         if(arr[mid]==target){
//             return true
//         }
//         else if(arr[mid]>target){
//             end=mid-1
//         }else{
//             start=mid+1
//         }
//     }
//     return false
// }
// console.log(binarySearch([1,2,3,4,5],2));

//?------------------------for both ascending and descending--------------------------



function binarySearch(arr,target){
    start=0;
    end=arr.length-1;
    let isAscending=arr[start]<arr[end]
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]==target){
            return mid
        }
        if(isAscending){
            if(arr[mid]>target){
                end=mid-1
            }else{
                start=mid+1
            }
        }
        else{
            if(arr[mid]>target){
                start=mid+1
            }else{
                end=mid-1
            }
        }
    }
    return false
}
console.log(binarySearch([5,4,3,2,1],2));