//? print the elemenet in the array which is greater than the left element and smaller than right element

// function between(arr){
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>arr[i-1] && arr[i]<arr[i+1]){
//             return arr[i]
//         }
//     }
//     return -1
// }
// console.log(between([3,6,2,2,4,5,6]));

function between(arr){
    for(let i=0; i<arr.length; i++){
        if(i==0){
            if(arr[i]<arr[i+1]){
                return arr[i]
            }
        }
        else if(i==arr.length-1){
            if(arr[i]>arr[i-1]){
                return arr[i]
            }
        }
        else{
            if(arr[i]>arr[i-1] && arr[i]<arr[i+1]){
                return arr[i]
            }
        }
    }
    return -1
}
console.log(between([3,6,2,2,4,5,6]));

