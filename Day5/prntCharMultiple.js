//? print the characher for the given number of times (aasume it's multi digit number)

// function occChars(str) {
//     let result = "";
//     let currentChar = "";
//     let countStr = "";
  
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
  
//       if (isNaN(char)) {
//         if (currentChar !== "" && countStr !== "") {
//           let count = parseInt(countStr);
//           for (let j = 0; j < count; j++) {
//             result += currentChar;
//           }
//         }
//         currentChar = char;
//         countStr = "";
//       } else {
//         countStr += char;
//       }
//     }
  
//     if (currentChar !== "" && countStr !== "") {
//       let count = parseInt(countStr);
//       for (let j = 0; j < count; j++) {
//         result += currentChar;
//       }
//     }
  
//     return result;
//   }
//   console.log(occChars("a2b3c4"));


function solve(str){
    let ans=""
    let i=0;
    while(i<str.length){
      let ch=str[i];
      let ascii = str.charCodeAt(i);
      if(ascii>=97 && ascii<=122)
      {
        i++;
        let newCh=str[i];
        let newAscii=str.charCodeAt(i);
        let num=0;
        while(newAscii>=48 && newAscii<=57)
        {
          num=num*10+Number(newCh);
          i++;
          newCh=str[i];
          newAscii=str.charCodeAt(i);
        }
        let temp=""
        while(num!==0)
        {
          temp+=ch;
          num--;
        }
        ans+=temp;
      }
      else{
        i++
      }
    }
    return ans
}

console.log(solve("a23b2c11"));