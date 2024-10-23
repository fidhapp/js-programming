//? fold the array by k times 
//? where k<arr.length/2

function fold(arr, k) {
    for (let i = 0; i < k; i++) 
        {
        let temp = []
        for (let j = 0; j < Math.floor(arr.length / 2); j++) 
        {
            let sum = arr[j] + arr[arr.length - 1 - j]
            temp.push(sum)
        }
        if (arr.length % 2 !== 0) 
        {
            temp.push(arr[Math.floor(arr.length / 2)])
        }
        arr = [...temp]
    }
    console.log(arr);
}
fold([1, 2, 3, 4, 5], 3)