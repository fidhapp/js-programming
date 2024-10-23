//? given 3 numbers a b c print the smallest amoung 3

a=10
b=20
c=30

if((a<b)&&(a<c)){
    console.log(`${a} is smallest number`);
}else if((b<a)&&(b<c)){
    console.log(`${b} is smallest number`);
}else{
    console.log(`${c} is the smallest number`);
}