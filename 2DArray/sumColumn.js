//? print the sum of array in such a way that each elemets in the array is the sum of each row


function sumColumn(arr){
    res=[]
    for(let i=0;i<arr[0].length;i++){
        let sum=0
        for(let j=0;j<arr.length;j++){
            sum=sum+arr[j][i]
        }res.push(sum)
    }
    console.log(res);
}
sumColumn([[1,2,3],[4,5,6],[7,8,9]])