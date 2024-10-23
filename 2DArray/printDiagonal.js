//? print the diadonal

function printDiagonal(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i==j){
                res.push(arr[i][j])
            }
        }
    }console.log(res);
}
printDiagonal([[1,2,3],[4,5,6],[7,8,9]])