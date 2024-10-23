//? check if the sentance is pangram
//? all alphabet from a-z have to be present in the sentance

function anagram(s1){
    let arr=new Array(26).fill(0)

    s1=s1.toLowerCase();

    for(let i=0 ; i<s1.length ; i++){
        let charcode = s1.charCodeAt(i)
        let index = charcode-97
        arr[index] = arr[index] + 1
    }

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == 0 ){
            return false
        }
    }
    return true
}

res=anagram("The five boxing wizards jump quickly")
if(res){
    console.log("it is pangram ");
}
else{
    console.log("it is not an pangram");
}