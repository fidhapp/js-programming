//? convert capital to small and small to capital

function capitalSmallConversion(string){
    let res=""
    for(let i=0;i<string.length;i++){
        if(string.charCodeAt(i)<=122 && string.charCodeAt(i)>=97){
            res=res+string[i].toUpperCase()
        }else if(string.charCodeAt(i)<=90 && string.charCodeAt(i)>=65){
            res=res+string[i].toLowerCase()
        }
    }
    return res;
}
console.log(capitalSmallConversion("Happy"));