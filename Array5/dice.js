//? you have observation of n+m 6 sided dice rolls with each face numbered from 1-6.
//?  n of the observations went missing and you only have the observation of m rolls. 
//? fortunately you have also calculated the average value of n+m rolls , you are 
//? given an integer array rolls of length m where rolls of i is the value of the i th 
//? observation you are also given 2 integers mean and n

// rolls=[3,2,4,3]
// n=2  (missing values)
// mean =4  (observed+unobserved)/n+m


let obj=[3,2,4,3]
let n=2
let avg=3
let sum_of_observed_value=0;
for(let i=0;i<obj.length;i++){
    sum_of_observed_value+=obj[i]
}

let remaining_sum= avg + (obj.length+n) - sum_of_observed_value;
console.log(remaining_sum);

let unobserved_array= new Array(n).fill(1);
remaining_sum=remaining_sum -n;
for(let i=0; i< unobserved_array.length;i++){
    let addition=Math.min(5,remaining_sum);
    unobserved_array[i]=unobserved_array[i]+addition
    remaining_sum=remaining_sum-addition
    if(remaining_sum==0){
        break
    }
}
console.log(unobserved_array);