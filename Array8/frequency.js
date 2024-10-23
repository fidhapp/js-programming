//? given an arrya print the elements in an ascending order of it's frequency

function ascOrdFreq(arr) {
    let obj = {}
    for(let i=0;i< arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }
        else{
            obj[arr[i]]+=1
        }
    }
    arr = Object.entries(obj);
    for(let i=0; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i][1]>arr[j][1]){
                let temp =arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    let res=[];
    for(let i=0;i<arr.length; i++){
        res.push(arr[i][0]);
    }
    console.log(res);
}
ascOrdFreq([1,2,3,2,3,2,5]);
