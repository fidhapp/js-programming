//? check if the string is palindrome or not


function ispalindrome(string){
    temp=string
    let res=""
    for(let i=string.length-1;i>=0;i--){
        res=res+string[i]
    }
    if(string==res){
        console.log("is palindrome");
    }else{
        console.log("not palindrome");
    }    
}
ispalindrome("malayalam")

