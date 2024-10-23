//? print the common prefix from the given array containing string

function prefix(arr){
    let fword=arr[0]
    let res=""
    for(let i=0;i<fword.length;i++){
        let ch=fword[i]
        let ispresent=false
        for(let j=1;j<arr.length;j++){
            let temp=arr[j][i]
            if(temp===ch){
                ispresent=true
            }
            else{
               ispresent=false
               return res
            }
        }
        if(!ispresent){
            return res
        }
        else{
            res+=ch
        }
    }
    return res
}console.log(prefix(["abca","abdc","abnm"]));