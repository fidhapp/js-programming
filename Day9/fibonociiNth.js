//? print the n th fibonocii series

// 0 1 1 2 3 5 8 13

function fibNth(n){
    let num1=0
    let num2=1
    let temp
    for(let i=2 ; i<n ; i++){
        temp=num2
        num2=num1+num2;
        // console.log(num1);
        num1=temp
    }
    console.log(num2);
}
fibNth(8)