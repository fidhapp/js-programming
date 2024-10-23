//? print the pattern 

// if(n=4)

// A B C D
// A B C D
// A B C D
// A B C D




function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=0;j<number;j++){
            str=str+String.fromCharCode(j+65)+" "
        }
        console.log(str);
    }
}
pattern(4)