//? find the substring which is having the maximum length and print the substring

function maxString(str){
    let max=-Infinity
    let window_start=0;
    let window_end=0
    for(let i=0; i<str.length; i++){
        let visited=new Array(256).fill(false)
        for(let j=i;j<str.length;j++){
            if(visited[str.charCodeAt(j)]==true){
                break
            }
            else{
                if(max < j - i+1){
                    max=j - i+1
                    window_start=i
                    window_end=j
                }
                visited[str.charCodeAt(j)] =true
            }
        }
    }
    return str.slice(window_start,window_end+1)
}
console.log(maxString("ababacdefacde"));