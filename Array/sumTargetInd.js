//? find any 2 index such that the sum of the indexes is equal to target


function sumTarget(arr,target)
{
    for(let i=0; i<arr.length; i++)
        {
        for(let j=i+1;j<arr.length; j++)
            {
            if(arr[i]+arr[j]===target)
            {
                return [i,j];
            }
        }
    }
    return -1;
}
console.log(sumTarget([2,5,5,7,9,1],10));