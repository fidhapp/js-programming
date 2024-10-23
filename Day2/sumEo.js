//? print sum of even numbers and odd numbers up to

// function sumof(n){
//     let evenSum=0;
//     let oddSum=0;
//     for(let i=0;i<=n;i++)
//     {
//         if(i%2==0){
//             evenSum+=i;
//         }
//         else{
//             oddSum+=i;
//         }
//     }
//     console.log(`even sum ${evenSum}`);
//     console.log(`even sum ${oddSum}`);
// }
// sumof(7)

//? same using while

function sumof(n){
    let evenSum=0;
    let oddSum=0;
    let i=0
    while(i<=n){
        if(i%2==0){
            evenSum+=i;
        }
        else{
            oddSum+=i;
        }
    }i++;
    console.log(`even sum ${evenSum}`);
    console.log(`even sum ${oddSum}`);
}
sumof(7)