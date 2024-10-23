//?check if the given 2 string is anagram or not

//? input = peal  leap anagram


function anagram(s1,s2){
    let arr1=new Array(26).fill(0)
    let arr2=new Array(26).fill(0)
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();


    for(let i=0;i<s1.length;i++){
        let charcode=s1.charCodeAt(i)
        let index=charcode-97
        arr1[index]=arr1[index]+1
    }
    for(let i=0;i<s2.length;i++){
        let charcode=s2.charCodeAt(i)
        let index=charcode-97
        arr2[index]=arr2[index]+1
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true
}

res=anagram("peol","leap")
if(res){
    console.log("it is anagram ");
}
else{
    console.log("it is not an anagram");
}