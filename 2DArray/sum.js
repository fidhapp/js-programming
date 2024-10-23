//? find the sum of elements of the 2d array



function sum(arr){
    let res=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            res=res+arr[i][j]
        }
    }console.log(res);
}
sum([[1,2,3],[4,5,6],[7,8,9]])