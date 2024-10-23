//? print the fisrt occured non-repaeting character in a string



function nonRepaeting(string){
    let arr=new Array(26).fill(0)
    for( let i=0; i<string.length; i++ ){
        let charcode=string.charCodeAt(i)
        let index=charcode-97   
        arr[index]=arr[index]+1        
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            console.log(String.fromCharCode(97+i));
            break;
        }
    }
}
nonRepaeting("aabddc")
