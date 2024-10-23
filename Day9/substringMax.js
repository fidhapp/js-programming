//? find the substring which is having the maximum length 


// function maxString(str){
//     let max=0
//     for(let i=0 ; i<str.length ;i++){
//         for(let j=i+1; j<str.length; j++){
//             if(str[i]==str[j]){
//                 break
//             }else{
//                 max=Math.max(max,j-i+1)
//             }
//         }
//     }
//     console.log(max);
// }
// maxString("ababacdefacde")


function maxString(str){
    let max=-Infinity
    for(let i=0; i<str.length; i++){
        let visited=new Array(256).fill(false)
        for(let j=i;j<str.length;j++){
            if(visited[str.charCodeAt(j)]==true){
                break
            }
            else{
                max=Math.max(max,j-i+1)
                visited[str.charCodeAt(j)]=true
            }
        }
    }
    console.log(max);
}
maxString("ababacdefacde")
