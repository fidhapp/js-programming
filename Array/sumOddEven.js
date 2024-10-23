//? find the sum of odd and even elements in the given array

function sumEvenOdd(arr){
    let sumeven=0;
    let sumodd=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!==0){
            sumodd+=arr[i]
        }else{
            sumeven+=arr[i]
        }
    }
    console.log(`the sum of odd elements : ${sumodd}`);
    console.log(`the sum of odd elements : ${sumeven}`);
}
sumEvenOdd([32,32,53,13])