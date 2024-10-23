//? check if the given string is palindrome or not using two pinter approach

function ispalindrome(str){
    let i=0;
    let j=str.length-1
    while(i<=j){
        if(str[i]!==str[j]){
            return false
        }
        i++;
        j--;
    }
    return true
}
let res=ispalindrome("malayalam")
// console.log(res);
if(res){
    console.log("is palindrome");
}else{
    console.log("not palindrome");
}

