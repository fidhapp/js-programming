//? am array element starting from n th index each element will be (2*i)+1 you have to pick the 2 elements you can do the following operations for
//? 1 elemnet either you can add or subtract. find the minimum number of operation required to make the array equal.


function minOperation(n){
    let sum=0;
    if(n%2==0){
        for(let i=1;i<n;i=i+2){
            sum+=i
        }
    }else{
        for(let i=0;i<n;i=i+2){
            sum+=i
        }
    }
    return sum
}
console.log(minOperation(4));