//? print 3 numbers in ascending order

a=10
b=32
c=23

let big1
let big2
let big3

if(a<b && a<c ){
    big1=a
    if(b<c){
        big2=b
        big3=c
    }else{
        big2=c
        big3=b
    }
}
else if( b<a && b<c ){
    big1=b
    if(a<c){
        big2=a
        big3=c
    }else{
        big2=c
        big3=a
    }
}else{
    big1=c
    big2=b
    big3=a
}
console.log(`${big1} ${big2} ${big3}`);