//? print the floyd's traingle for the given number n

// 1
// 2 3
// 4 5 6
// 7 8 9 10


function floyd(n){
    let count=0;
    for(let i=0; i<=n; i++){
        let str=" "
        for(let j=0;j<i;j++){
        count++
        str=str+count+" "
        }
        console.log(str);
    }
}
floyd(4)