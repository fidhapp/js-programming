//? print the maximum running element?


function runningMax(arr){
    max = -Infinity
    let res=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
        res.push(max)
    }
    console.log(res);  
}
runningMax([4,8,2,1,9])