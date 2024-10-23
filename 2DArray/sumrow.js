//? print the sum of array in such a way that each elemets in the array is the sum of each columns


function sumrow(arr){
    res=[]
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=0;j<arr[i].length;j++){
            sum=sum+arr[i][j]
        }res.push(sum)
    }
    console.log(res);
}
sumrow([[1,2,3],[4,5,6],[7,8,9]])