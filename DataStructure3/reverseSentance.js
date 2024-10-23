//? reverse the sentance?

function reverse(str){
    let revstr = ""
    for(let i=0 ; i < str.length-1  ; i++){
        if(str[i]!==" "){
            revstr = str[i] + revstr
        }else{
            revstr = revstr + " ";
        }
    }
    console.log(revstr);
}
reverse("the sky is pink")