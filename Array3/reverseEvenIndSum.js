//? reverse the given string and print the sum of even index element?

function sumReverseEven(arr){
    let rev_arr=[]
    let j=0
    for(let i=arr.length-1; i>=0; i--){
        rev_arr[j]=arr[i]
        j++
    }
    let sum=0
    for(let j=0; j<rev_arr.length; j++){
        if(j%2==0){
            sum+=rev_arr[j]
        }
    }
    console.log(`the sum of even index position element is ${sum}`);
}
sumReverseEven([2,6,2,5,2,7,3])