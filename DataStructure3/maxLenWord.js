//? find the length of the word which is having maximum length in the given sentance


function maxLength(str){
    // str.trim()
    let len1=0;
    let len2=0;
    for( let i=0 ; i<str.length ; i++ ){
        if(str[i]!==" "){
            len1++
        }else{
            if(len1 > len2){
                len2 = len1;
            }
            len1=0;
        }
    }
    console.log(len1);
}
maxLength("the sky is blue")