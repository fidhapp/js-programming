//? find the number of vallies in the given trek


// function truck(str){
//     let count=0
//     for(i=0 ; i<str.length-1 ; i++){
//         if(str[i]=="D" && str[i+1]=="U"){
//             count++
//         }
//     }
//     console.log(count);
// }
// truck("UDDUDDUUDU")


function truck(str){
    let count=0
    valley=0
    for(i=0 ; i<str.length-1 ; i++){
        if(str[i]=="U"){
            count++
        }
        else{
            count--
        }
        if(count==0 && str[i]=="U"){
            valley++
        }
    }
    console.log(valley);
}
truck("UDDUDDUUDU")

