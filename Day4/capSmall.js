//? find the number of capital letters and small letters in a string

//! a=97 z=122  A=65  Z=90

function countCapitalSmall(string){
    let cap=0
    let sml=0
    for(let i=0;i<string.length;i++){
        if(string.charCodeAt(i)<122 && string.charCodeAt(i)>97){
            sml++
        }else if(string.charCodeAt(i)<90 && string.charCodeAt(i)>65){
            cap++
        }
    }
    console.log(`capital=${cap} small=${sml}`);
}
countCapitalSmall("Hello")