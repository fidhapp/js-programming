//? tom is writting a secrete msg using a string of text str however he accidently mixed up 2 important characters 
//? that is ch1 and ch2. now all instance of ch1 has termed in to ch2, ch2 has terned to ch1. your mission is to help 
//? tom by creating a function that will restore the original msg. the function should take string str along with the 2 
//? character ch1 and ch2 and swap them back to their correct places so that the msg is exactly as tom indended it


function replace(str,ch1,ch2){
    let res=""
    for(i=0;i<str.length;i++){
        if(str[i]==ch1){
            res=res+ch2
        }else if(str[i]==ch2){
            res=res+ch1
        }else{
            res=res+str[i]
        }
    }
    console.log(res);
}
replace("paale","a","p")