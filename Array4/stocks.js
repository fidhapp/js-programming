//? stock price at particular day are been given. find the maximum profite that can be made

// [2,5,7,1,9] 

// 3,2,-6,8   output=8

// function stocks(arr){
//     let max=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if((arr[j]-arr[i])>max){
//                 max=arr[j]-arr[i]
//             }
//         }
//     }
//     console.log(max);
// }
// stocks([2,5,7,1,9])



//!---------------------------Another method-----------------------------------------


function stocks(arr){
    let max=0
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        min=Math.min(min,arr[i])
        max=Math.max(max,arr[i]-min)
    }
    console.log(max);
}
stocks([2,5,7,1,9])