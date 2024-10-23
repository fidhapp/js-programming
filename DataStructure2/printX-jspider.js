//? print x with jspider


function printz(n){
    for(let i=0;i<n.length;i++){
        let str=""
        for(let j=0;j<n.length;j++){
            if (i+j === n.length -1 || i === j) {
                str += n[i];
            } else {
                str += '  ';
            }
        }
        console.log(str);
    }
}
printz("JSPIDER")