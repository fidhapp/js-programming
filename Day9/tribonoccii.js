//? print the tribanocii series

//? 


function fibNth(n){
    let num1=0
    let num2=1
    let num3=1
    let temp
    for(let i=1 ; i<n ; i++){
        temp=num1+num2+num3;
        num1=num2
        num2=num3
        num3=temp
        // console.log(num1);
    }
    console.log(num3);
}
fibNth(8)