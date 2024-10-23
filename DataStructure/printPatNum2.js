//? print the pattern    (i=row   j=columns)

//  if n=3

//  1
//  1 2 
//  1 2 3

function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=1;j<=i+1;j++){
            str=str+j+" "
        }
        console.log(str);
    }
}
pattern(3)