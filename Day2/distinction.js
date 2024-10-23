//? check for the ranking of students by their marks  distiction>90   first-class>75 & 90   second-class 50-75  just-pass >35 else fail



function ranking(a,b,c){
    if(a>35 || b>35 || c>35 ){
        console.log("the student is pass in all subject");
        avg=(a+b+c)/3
        if(avg>90){
            console.log("distiction");
        }
        else if(avg>=75 && avg<90)
        {
            console.log("first-class");
        }
        else if(avg>=50 && avg<75)
        {
            console.log("second class");
        }
        else{
            console.log("just pass");
        }
    }else{
        console.log("the student is failed");
    }
}
ranking(53,85,46)