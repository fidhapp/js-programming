//? find the second smallest number in the array


function secondSmallest(arr){
    let small=arr[0]
    let secsmall=-Infinity;

    for(let i=0; i<arr.length; i++)
        {
        if( secsmall>arr[i] && arr[i]>small)
            {
                secsmall=arr[i]
            }
            else if(arr[i]<small)
            {
                secsmall=small
                small=arr[i]
            }
        }
    console.log(`the second smallest amoung the array elements ${secsmall}`);
}
secondSmallest([163 ,25 ,38 ,130 ,82])