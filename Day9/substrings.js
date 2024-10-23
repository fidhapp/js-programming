//? print all the substrings of a given word

function substring(str){
    for(i=0 ; i<str.length ; i++){
        for(let j=i; j<str.length; j++){
            console.log(str.slice(i,j+1));
        }
    }
}
substring("abc")

