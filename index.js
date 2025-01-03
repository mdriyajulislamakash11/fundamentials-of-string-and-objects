//______________________ 20 module part-1 ___________________/
20_1 Introduction to string and string vs array.
//______________ string ____________/

const country = "bangladesh"; //double qoute
const divition = 'alu';       //single qoute
const name = `backtick`;      //backtick

const number = [11, 22, 33, 44, 55];
number[0] = 66;
console.log(number)

const friend = "samiul";
friend[0] = "w" 
console.log(friend) 

//______________________ 20 module part-1 ___________________/
// 20_2 String Comparison lowercase uppercase and trip
  //______________ CASESENSATIVE ____________/

const school = "Raj UK"
console.log(school.toLowerCase())
console.log(school.toUpperCase())


//______________ .trim() ____________________/ 

const drink = "water ";
const liquid = " water";

if(drink.trim() === liquid.trim() ){
      console.log("pani er opor name life.")
}else{
      console.log("sumudre pani ase khaite pari na")
}
//-_______________________________________________________/



//______________________ 20 module part-1 ___________________/
// 20_3 String Slice, Join, Concat and includes.
            //______________ .slice() ____________/

// eta index theke koto number index porjonto nibo ta bolte hobe//
const address = "bangladesh";
const part = address.slice(0,5);
console.log(part)
//______________________________________________________________/


// /_________________ .split() _______________________/
// etar kaj hocche alada aada kora //
const sentence = "i am a good and hard worker";
console.log(sentence.split(''))
______________________________________________________________/


// /_________________ .join() _______________________/
// etar kaj hocche join dewya //
const friends = ["kalacan", "dhoacan", "lalacan", "nilcan",];
console.log(friends.join(" || "))  // output: kalacan || dhoacan || lalacan || nilcan
console.log(friends.join(" -- "))  // output: kalacan -- dhoacan -- lalacan -- nilcan
console.log(friends.join(" // "))  // output: kalacan // dhoacan // lalacan // nilcan
console.log(friends.join(" ## "))  // output: kalacan ## dhoacan ## lalacan ## nilcan
//____________________________________________________________________________________________/


// /_________________ .concat() _______________________/
// jog korar moto //
const first = "abu";
const last = "hasan";
const fullName = first.concat(" ").concat(last);
console.log(fullName);
//____________________________________________________________/





//______________________ 20 module part-1 ___________________/
// 20_4 Reverse a String in Three different ways.
    //______________ reverse ____________/

let sentence = "i am a web developer";
let reverse = "";
for(const i of sentence){
      reverse = i + reverse;
}
console.log(reverse);
//__________________________________________________/

let rev = "";
let sentence = "i am a web developer";
for(let i = 0; i <sentence.length; i++){
      // console.log(i);
      // console.log(sentence[i])
      const letter = sentence[i];
      rev = letter + rev;
}
console.log(rev)
// \__________________________________________________/

    //______________ .reverse() ____________/
// pagla buddi...jonkar vaiyer hahaha!!!
let sentence = "i am a web developer";
const reverse = sentence.split("").reverse().join('');
console.log(reverse)




//______________________ 20 module part-1 ___________________/
// 20_5 Introduction to Objects properties and values
    //______________ objects ____________/
const bottle = {
      brand: "apple",
      name: "kala",
      price: 222,
      color: "black",
      isClean: true,
}
console.log(bottle.brand);




// // //______________________ 20 module part-1 ___________________/
// 20_4 Reverse a String in Three different ways.
    //______________ braket notetion ____________/.

const person = {
      name: "akash",
      color: "black dimond",
      job: "web developer",
      salery: 30000,
      isMarride: false,
}
console.log(person)
console.log(person.salery)
console.log(person["isMarride"])
person.job= "app deveoper"
console.log(person)
person["name"] = "Rj Akash Chowdury"
console.log(person)




//______________________ 20 module part-1 ___________________/
// 20_8 Keys, Values, nested objects and delete.
    //______________ key ____________/
const computer = {
      brand: "Apple",
      name: "macbook",
      color: "black",
      price: 200000,
      processor: "intel",
      hdd: "2TB",
      monitor: "hp"
};
// console.log(computer);
const keys = Object.keys(computer);
console.log(keys)
// \__________________________________________________/


// \__________________ Values _________________________/
const computer = {
      brand: "Apple",
      name: "macbook",
      color: "black",
      price: 200000,
      processor: "intel",
      hdd: "2TB",
      monitor: "hp"
};
// console.log(computer);
const values = Object.values(computer);
console.log(values)
// \________________________________________/

// \________________ nasted  ______________//
const computer = {
      brand: "Apple",
      name: "macbook",
      color: "black",
      biyaBari: {
            jamai: "abul miya",
            bari: "josor",
            kaj: "3 cakkar pailot",
            bow: {
                  name: "sokina",
                  kam: "boisa taka",
            }
      },
      price: 200000,
      processor: "intel",
      hdd: "2TB",
      monitor: "hp"
};
console.log(computer.biyaBari.bow.name);
//______________________________________________//


// \________________ delete  ______________//
delete computer.hdd
console.log(computer)
//___________________________________//



//______________________ 20 module part-1 ___________________/
// 20_9 Loop an object and Ways to declare an Object.
    //______________ loop in object ____________/

const mobail = {
      brand: "apple",
      price: 12334,
      color: "black",
      camera: "12mp",
      isNew: true,
};

//for of : array er jonno loop
//for in : object er jonno lopp

 // FOR IN____lopp
for(let prop in mobail){  // object a loop calate hole for in loop calate hobe for of calano jabe na
      console.log(prop)
};

const keys = Object.keys(mobail);
console.log(keys);

for(const key of keys){
      // console.log(key);
      console.log(key, ":", mobail[key])
}


//____________________ new Object ___________/
const pen = {brand: "apple", price: 20000, color: "red",}
console.log(pen);
const pencile = new Object()
console.log(pencile)

//___________ Object.create() _________________________/
const rubber = Object.create({});
console.log(rubber)



