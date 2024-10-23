//? print the pattern    (i=row   j=columns)

//  if n=3

//      1
//    1 2 
//  1 2 3

function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=0;j<number-i-1;j++){
            str=str+" "+" "
        }
        for(let k=1;k<=i+1;k++){
            str=str+k+" "
        }
        console.log(str);
    }
}
pattern(3)