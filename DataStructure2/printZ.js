//? print z

//? print reversed n


function printZ(n){
    for(let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (i === 0 || i+j === n-1 || i === n-1) {
                str += ' *';
            } else {
                str += '  ';
            }
        }
        console.log(str);
    }
}
printZ(4)