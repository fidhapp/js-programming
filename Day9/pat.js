//? print the string in the following format

//  input => examination  
//  output => e9n

function changePat(str){
    let count=0
    let fw=str[0]
    let lw=str[str.length-1]
    let res=""
    for(let i=1;i<str.length-1;i++){
        count++
    }
    res=fw+count+lw;
    console.log(res);
}
changePat("examination")


