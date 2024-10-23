// !sum

function sumColumn(arr){
    res=[]
    for(let i=0;i<arr[0].length;i++){
        let sum=0
        for(let j=0;j<arr.length;j++){
            sum=sum+arr[i][j]
        }res.push(sum)
    }
    console.log(res);
}
sumColumn([[1,2,3],[4,5,6],[7,8,9]])