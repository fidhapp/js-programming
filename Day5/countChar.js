//? check the count of the character and print it in the following format

//? i/p => abacdcab  op => a3b2c2d1

function countChar(str){
    let seen={};
    for(let i=0;i<str.length;i++){
        let char =str[i];
        if(!seen[char]){
            seen[char]=1;
        }else{
            seen[char]+=1;
        }
    }
    let res="";
    for(let key in seen){
        res=res+key+seen[key];
    }
    return res;
}
console.log(countChar("abacdab")); 