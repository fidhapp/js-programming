//? given the number on one face of the dice, print the number on the opposite side of the dice


// 1+6=7
// 2+5=7
// 3+4=7


function diceOpposite(n){
    let num;
    if(n<6 || n>0){
        num=7-n;
        return num
    }else{
        return false
    }
}
res=diceOpposite(4)

if(res){
    console.log(`the opposite is ${res}`);
}else{
    console.log(`the number is not in the dice`);
}