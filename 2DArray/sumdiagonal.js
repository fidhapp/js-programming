//? sum diagonal


function sumdiag(arr){
    let res=0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr[i].length;j++){
            if(i==j){
                res+=arr[i][j]
            }
        }
    }console.log(res);
}
sumdiag([[1,2,3],[4,5,6],[7,8,9]])