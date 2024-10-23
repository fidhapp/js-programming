//? find the second biggest elemets in the array

function secondBiggest(arr){
    let big=arr[0]
    let secBig=-Infinity;

    for(let i=0; i<arr.length; i++)
        {
        if( secBig<arr[i] && arr[i]<big)
            {
                secBig=arr[i]
            }
            else if(arr[i]>big)
            {
                secBig=big
                big=arr[i]
            }
        }
    console.log(`the second biggest amoung the array elements ${secBig}`);
}
secondBiggest([163 ,25 ,38 ,130 ,82])