//? count the number of digits in a given number

function count(n){
    let i=0
    do{
        n=Math.floor(n/10)
        i++
    }while(n!==0)
    // console.log(`the number of digits = ${i}`);
    return i;
}
console.log(count(32874)); 