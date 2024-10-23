//? print reversed n


function printReverseN(n){
    for(let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (j === 0 || i+j === n-1 || j === n-1) {
                str += ' *';
            } else {
                str += '  ';
            }
        }
        console.log(str);
    }
}
printReverseN(4)