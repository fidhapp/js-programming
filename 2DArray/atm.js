//!an amount of 1250 is to be withdrawn from ATM. 
//! notes=[50,100,200,500] (the number of notes must be minimum)
// output=[ 500, 500, 200, 50 ]

function withdraw(arr,target){
    let res=[];
    for(let i=arr.length-1;i>=0;i--){
        while(target>=arr[i]){
            res.push(arr[i]);
            target=target-arr[i];
        }
        if(target===0){
            return res
        }
    }
    return res;
}
console.log(withdraw([50,100,200,500],1250));