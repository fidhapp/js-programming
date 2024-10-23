//? print the pattern 

// if(n=4)

// 1 0 1 0 
// 1 0 1 0 
// 1 0 1 0 
// 1 0 1 0 

function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=1;j<=number;j++){
            if(j%2==0){
                str=str+"0"+" "
            }
            else{
                str=str+"1"+" "
            }
            
        }
        console.log(str);
    }
}
pattern(4)