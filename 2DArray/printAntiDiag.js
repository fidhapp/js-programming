//? print the anti diagonal elements in the 2 d array


function printAntiDiagonal(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if((i+j)==arr.length-1){
                res.push(arr[i][j])
            }
        }
    }console.log(res);
}
printAntiDiagonal([[1,2,3],[4,5,6],[7,8,9]])