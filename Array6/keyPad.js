//? print all the possible alphabetic combination of a two digit number in a keypad

// ? 1=abc 
// ? 2=def
// ? 3=ghi 
// ? 4=jkl 
// ? 5=mno 
// ? 6=pqr 
// ? 7=stu 
// ? 8=vwx
// ? 9=yz 


//? input n=56

//? output= nq nr ns oq or os pq pr pr


function combination(n){
    let obj={1:"abc", 2:"def",3:"ghi",4:"jkl", 5:"mno", 6:"pqr", 7:"stu", 8:"vwx",9:"yz",0:"-"}
    let n1=Math.floor(n/10);
    let n2=n%10;
    firstword=obj[n1]
    secondword=obj[n2]
    for(let i=0;i<firstword.length;i++){
        for(j=0;j<secondword.length;j++){
            console.log(firstword[i]+secondword[j]);
        }
    }
}
combination(56)
