//? print the pattern 

// if(n=4)

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4


function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=1;j<=number;j++){
            str=str+j+" "
        }
        console.log(str);
    }
}
pattern(4)