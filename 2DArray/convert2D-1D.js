//? convert the 2d array to 1d array


function convert(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            res.push(arr[i][j])
        }
    }console.log(res);
}
convert([[1,2,3],[4,5,6],[7,8,9]])