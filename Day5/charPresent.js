//? check if the character present inside th estring or not

function charCheck(str,trg){
    for(let i=0;i<str.length;i++){
        if(str[i]==trg){
            return true
        }
    }
    return false
}
let res=charCheck("apple","c")
if(res){
    console.log("is found");
}else{
    console.log("not found");
}