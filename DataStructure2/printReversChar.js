//? print the pattern    (i=row   j=columns)

//  if n=3

//      A
//    A B 
//  A B C

function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=0;j<=number-i-1;j++){
            str=str+" "+" "
        }
        for(let k=0;k<i+1;k++){
            str=str+String.fromCharCode(k+65)+" "
        }
        console.log(str);
    }
}
pattern(3)