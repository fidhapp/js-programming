//? print the pattern N


function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (j === 0 || j === n - 1 || i === j) {
                str += '* ';
            } else {
                str += '  ';
            }
        }
        console.log(row);
    }
}

printPattern(4);


// 00  01  02  03       j===0

// 10  11  12  13       j===n-1

// 20  21  22  23       i===j

// 30  31  32  33

