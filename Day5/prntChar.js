//? print the characher for the given number of times (aasume it's a single digit number)

//? input=> a3b2c2d1  output=> aaabbccd  

function prntChar(str){
    let res="";
    for(let i=0;i<str.length;i=i+2){
        // let char=str[i];
        let count=Number(str[i+1]);
        let temp="";
        for(let j=0;j<count;j++){
            temp+=str[i];
        }
        res+=temp;
    }
    return res;
}
console.log(prntChar("a3b2c1"));

