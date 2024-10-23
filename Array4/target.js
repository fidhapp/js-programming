//? given a target N and a strainght number A check whether you can reach the 
//? target by multiplying A by eithr 10 or 20 continuesly 

function istarget(n,a) {
    if(a===n){
       return true;
    }
    if(a>n){
        return false
    }
    return istarget(n,a*10);
}
console.log(istarget(1000,10));
