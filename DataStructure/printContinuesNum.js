//? print the pattern 

// if(n=4)

// 01 02 03 04 
// 05 06 07 08
// 09 10 11 12
// 13 14 15 16


function pattern(number){
    let count=1
    for(let i=0;i<number;i++){
        let str=""
        for(let j=1;j<=number;j++){
            if(count<10){
                str=str+"0"+count+" "
            }
            else{
                str=str+count+" "
            } 
            count++
        }
        console.log(str);
    }
}
pattern(4)


//! using ternamry operator

// (count<10)? str=str+"0"+count+" " : str=str+count+" "

//~ ------------------------------another method-----------------------------------------

// function pattern(number){
//     for(let i=0;i<number;i++){
//         let res=""
//         for(let j=1;j<=number;j++){
//             res+=String((number*i)+j)+" "
//         }
//         console.log(res);
//     }
// }
// pattern(4)