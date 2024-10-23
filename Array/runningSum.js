//? find the running sum of the given array?

function runningMax(arr){
    sum=arr[0]
    let res=[]
    for(let i=1; i<arr.length; i++){
        sum+=arr[i];
        res.push(sum)
    }
    console.log(res);  
}
runningMax([4,8,2,1,9])