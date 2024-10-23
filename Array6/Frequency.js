//? given an array replace all the elements according to it's frequency in the array
input= [1,4,2,5,1,2,4,2] 
output = [2,2,3,1,2,2,3]




function frequency(arr){
    let obj={}
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=obj[arr[i]]
    }
    console.log(arr);
}
frequency([1,4,2,5,1,2,4,2])