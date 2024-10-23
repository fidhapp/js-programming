//? find the number of time the count reaches to 4 in 7 days in entire string



function maxString(str){
    let count=0
    let salCount=0
    for(let i=0;i<str.length-7;i++){
        for(let j=i;j<=i+7;j++){
            if(str[j]==1){
                count++
            }
        }
        if(count>=4){
            salCount++
        }
    }
    console.log(salCount);
}
maxString("0000010010010010")