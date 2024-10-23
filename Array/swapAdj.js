//? swap the adjacent element in an array

// arr[1,2,3,4,5,6,]

// result [2,1,4,3,6,5]

function swap(arr){
    let ele1=0
    let ele2=0

    res=[]
    for(let i=0 ;i<arr.length; i+=2){
        ele1=arr[i+1]
        ele2=arr[i]
        res.push(ele1,ele2)
    }
    console.log(res);
}
swap([1,2,3,4,5,6,])