
//? print the pattern    (i=row   j=columns)

//  if n=3

//  A
//  A B 
//  A B C

function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=0;j<=i;j++){
            str=str+String.fromCharCode(j+65)+" "
        }
        console.log(str);
    }
}
pattern(3)