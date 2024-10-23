//? perform slice operation without using inbiuld function


function slice(arr,startInd,endInd){
    let slicearray=[]
    let j=0
    for(let i=startInd; i<endInd; i++){
        slicearray[j]=arr[i]
        j++
        // slicearray.push(arr[i])
    }
    console.log(`the sliced array is ${slicearray}`);
}
slice([32, 3, 54, 67, 13, 67], 2, 5)