//? print all the 3 digit palindrome number


function isPalindrome(){
    for(let i=1;i<=9;i++){
        for(let j=1;j<=9;j++){
            console.log(`${i}${j}${i}`);
        }        
    }
}
isPalindrome()