//? fibnoccii series up to n?

function fibnoccii(n){
    let res=[0,1]
    let num1=0
    let num2=1
    let temp
    for(let i=2 ; i<n ; i++){
        temp=num2
        num2=num1+num2;
        num1=temp
        res.push(num2)
    }
    console.log(res);
}
fibnoccii(8)