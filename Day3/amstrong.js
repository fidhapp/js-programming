//? check if the numebr is an amstrong number

//! sum of the cubes of the digit = the given number

function eachDigit(n){
    let cube=0
    let temp=n
    do{
        let reminder=n%10;
        cube=cube+reminder**3
        n=Math.floor(n/10)
    }while(n!==0)
    if(cube==temp){
        console.log("amstrong number");
    }else{
        console.log("not an amstrong number");
    }
}
eachDigit(153)