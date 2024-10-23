//? reverse the array, without using inbuild methods?

// function reverse(arr){
//     let rev_arr=[]
//     let j=0
//     for(let i=arr.length-1; i>=0; i--){
//         rev_arr[j]=arr[i]
//         j++
//     }
//     console.log(rev_arr);
// }
// reverse([1,2,3,4,5])

//?--------------------another method without using array----------------------------------------


function reverse(arr){
    let i=0;
    let j=arr.length-1;
    while(i<=j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j--
        i++
    }
    return arr
}
let arr=[1,2,3,4,5]
console.log(reverse(arr));
 