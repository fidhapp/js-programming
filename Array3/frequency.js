//? print the frequency of given element inside give array

// arr = [1,2,3,1,3,2]
// ele = 1
// output = 2

function frequency(arr,ele){
    let count=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]===ele){
            count++
        }
    }
    console.log(count);
}
frequency([1,2,3,1,3,2],1)