//? print x


function printz(n){
    for(let i=0;i<n;i++){
        let str=""
        for(j=0;j<n;j++){
            if (i+j === n-1 || i === j) {
                str += ' *';
            } else {
                str += '  ';
            }
        }
        console.log(str);
    }
}
printz(5)