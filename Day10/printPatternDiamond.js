//? prnt the diamond pattern

    //          *
    //       *  *  *
    //    *  *  *  *  *
    //       *  *  *
    //          *

function pattern(n){
    for(let i=0 ; i<n ; i++){
        let str=""
        if( i < Math.floor(n / 2)){
            for(let j = 0 ; j<= n-i-1 ; j++){
            str = str + " " + " "
            }
            for(let k=0 ; k<(2*i)+1 ; k++){
            str = str + "*" +" "
            }
        }
        else{
            for(let j = 0 ; j< i+1 ; j++){
                str = str + " " + " "
            }
            for(let k=0 ; k<=2*(n-i-1) ; k++){
                str = str + "*" +" "
        }
    }
    console.log(str);
    }
}
pattern(7)