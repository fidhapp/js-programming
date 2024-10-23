//? reverse the sentence and the word?


function reverse(str){
    let revstr="";
    for(let i=str.length-1; i>=0; i--){
        if(str[i]!==" "){
            revstr = revstr + str[i]
        }else{
            revstr=revstr + " ";
        }
    }
    console.log(revstr);
}
reverse("the sky is pink")