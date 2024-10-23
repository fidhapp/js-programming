//? find the last word in a given sentance


function lastword(str){
    let length=0;
    for(let i=str.length-1; i>=0; i--){
        if(str[i]!==" "){
            length++
        }else{
            break;
        }
    }
    console.log(length);
}
lastword("the sky is blue")