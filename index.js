// //______________________ 20 module part-1 ___________________/
// 20_1 Introduction to string and string vs array.
// //______________ string ____________/

const country = "bangladesh"; //double qoute
const divition = 'alu';       //single qoute
const name = `backtick`;      //backtick

const number = [11, 22, 33, 44, 55];
number[0] = 66;
// console.log(number)

const friend = "samiul";
friend[0] = "w" 
console.log(friend) 

// //______________________ 20 module part-1 ___________________/
// // 20_2 String Comparison lowercase uppercase and trip
//   //______________ CASESENSATIVE ____________/

const school = "Raj UK"
console.log(school.toLowerCase())
console.log(school.toUpperCase())


// //______________ .trim() ____________________/ 
// 
const drink = "water ";
const liquid = " water";

if(drink.trim() === liquid.trim() ){
      console.log("pani er opor name life.")
}else{
      console.log("sumudre pani ase khaite pari na")
}
// //-_______________________________________________________/



// //______________________ 20 module part-1 ___________________/
// // 20_3 String Slice, Join, Concat and includes.
//             //______________ .slice() ____________/

// // eta index theke koto number index porjonto nibo ta bolte hobe//
const address = "bangladesh";
const part = address.slice(0,5);
console.log(part)
// //______________________________________________________________/


// // /_________________ .split() _______________________/
// // etar kaj hocche alada aada kora //
const sentence = "i am a good and hard worker";
console.log(sentence.split(''))










