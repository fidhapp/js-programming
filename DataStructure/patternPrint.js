//? print the pattern    (i=row   j=columns)

//  if n=3

//  * * *
//  * * *
//  * * *

function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=0;j<number;j++){
            str=str+"*"+""
        }
        console.log(str);
    }
}
pattern(3)