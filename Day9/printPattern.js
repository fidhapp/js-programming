// n=3
//     * * *     i=0 space=2 star=3                 j=3-0-1 =2
//   * * *       i=1 space=1 star=2                 j=3-0-1 =2
// * * *         i=2 space=0 star=1                 j=3-0-1 =2

function pattern(number){
    for(let i=0;i<number;i++){
        let str=""
        for(let j=0;j<number-i-1;j++){
            str=str+" "+" "
        }
        for(let k=0;k<number;k++){
            str=str+"*"+" "
        }
        console.log(str);
    }
}
pattern(3)