//? find the middle element

a=10
b=20
c=15

if(((a>b)&&(a<c))||((a<b)&&(a>c)))
{
    console.log(`${a} is the middle element a`);
}
else if(((b>a)&&(b<c))||((b<a)&&(b>c))){
    console.log(`${b} is the middle element a`);
}else
{
    console.log(`${c} is the middle element c`);
}