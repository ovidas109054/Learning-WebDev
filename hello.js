// console.log("Hello Java Script!");
// let a = 25;
// let b = 32;
// let sum = a + b;
// console.log("The sum of and b is : "+ sum);
// name = "Ovi Das"
// console.log(name);

// a = 5;
// b = 4;
// sum = a + b;
// console.log(sum);
// a = 6;
// sum = a + b;
// console.log(sum);
// name = "Ovi ";
id = 93;
// console.log("name " + name + "and id are " +id);
// let name = "Krishna";
// console.log(name);
// console.log(10+"5");

//conditional statment in JavaScript
// a = 70;
// b = 9;

// if (a<=b){
//     console.log("This is True");
// }else{
//     console.log("This is not true");
// }
 
//loop in javascript

// for(let i=0;i<5;i++){
//     console.log("Hello world "+i);
// }

// let n=0;
// while(n<=5){
//     n++;
//     console.log("hello world"+ n );
// }

// let num=['hello','gello', 'colo', 'kolo']
// const tnum = num.length; 
// console.log(num)
// console.log(num[0]);
// const student={
//     name: "Ovi shukla das",
//     Id: 230241093,
//     batch: "41st",
//     active: "true",
//     age: 24

// }
// console.log(student["name"])
// for(const key in student){
//     console.log(key+": " + student[key])
// }
// const str = "hello";
// console.log(str.toUpperCase())
// const str1="hello world."
// const str2= "how  are  you "
// console.log(str1.concat(str2))
// function fun( a ,b){
//     sum= a+b;
//     return sum;
// }
// // sumer = fun(4,5)
// console.log("the sum of the a & b is : ",fun(4,5));

// Question 1
// function matchWinner(teamAGoals, teamBGoals) {
//   if( Number.isInteger(teamAGoals)&& Number.isInteger(teamBGoals)){
//     if(teamAGoals>-1&&teamBGoals>-1){
//         if(teamAGoals<teamBGoals){
//             return "Team B Won";
//         }else if(teamAGoals === teamBGoals){
//             return "Draw";
//         }else{
//             return "Team A Won";
//         }
//     }
//     return "Invalid";
//   }
//   else{
//     return "Invalid";
//   }
// }

//Question 2

// function isElevatorSafe(weights) {
//   if(Array.isArray(weights) && weights.length>0){
//     let sum=0;
//     for(let i=0;i<weights.length;i++){
//         sum += weights[i];
//     }
//     if(sum<=400){
//         return true;
//     }else{
//         return false;
//     }
//   }else{
//     return "Invalid"
//   }
// }


//Problem-01: Match Winner


// function matchWinner(teamAGoals, teamBGoals) {
//   if( Number.isInteger(teamAGoals)&& Number.isInteger(teamBGoals)){
//     if(teamAGoals>-1&&teamBGoals>-1){
//         if(teamAGoals<teamBGoals){
//             return "Team B Won";
//         }else if(teamAGoals === teamBGoals){
//             return "Draw";
//         }else{
//             return "Team A Won";
//         }
//     }
//     return "Invalid";
//   }
//   else{
//     return "Invalid";
//   }
// }


//Problem-02: Elevator Weight Safety Checker
// function isElevatorSafe(weights) {
//   if(Array.isArray(weights)){
//     let sum=0;
//     for(let i=0;i<weights.length;i++){
//         sum += weights[i];
//     }
//     if(sum<=400){
//         return true;
//     }else{
//         return false;
//     }
//   }else{
//     return "Invalid"
//   }
// }

// //Provlem 3
// function calculateAiCost(tokensUsed) {
//  if(Number.isInteger(tokensUsed)&& tokensUsed>=0) {
//   if(tokensUsed <= 500){
//     return 0;
//   }else{
//     let exto= tokensUsed-500;
//     let cost = Math.floor(exto/100)*5

//     return cost;
//   }
//  }else{
//   return "Invalid";
//  }
// }

// // problem 4

// function topRatedRestaurant(restaurants) {
//     if(Array.isArray(restaurants) && restaurants.length>0){
//         let good = restaurants[0];
//         for(let i=0;i<restaurants.length;i++){
//           if(restaurants[i].rating>good.rating){
//             good = restaurants[i];
//           }
//         }
//         return good.name.toUpperCase()
//     }else{
//       return "Invalid"
//     }
// }
// function averageResponseTime(times) {
//   if (!Array.isArray(times)) {
//         return "Invalid";
//    }
//   if(times.length===0){
//     return "Invalid";
//   }
//  let total = 0;
//     for (let i = 0; i < times.length; i++) {
//       if(typeof times[i] !=="number"){
//         return "Invalid";
//       }
//         total += times[i];
//     }
   
//   return total / times.length;



// function Hello(say = 'hi'){
//   return 'hello,${say}'
  
// }
// Hello("Ovi");
// let name = 'Ovi';
// let a = 5;
// let b = 6;
// let message = `Hello ${name}. what are you doing`;
// let sum = `Sum of the a & b is ${a+b}`;
// console.log(sum);
//  let number = [1,2,3,4,5,6]
// //  console.log(...number);
// //  console.log(Math.max(...number));
// //  console.log(this);
// // array destructuring
//  let [f, s, , ,fv,six]=number;
//  console.log(f,s,fv,six);
// //object destructuring
//  let student = {
//     name:"Ovi",
//     roll: 93,
//     age:24
//  }
//  let {roll ,age} = student;
//  console.log(roll, age);

// let a = 10;
// let b = a;

//  b = 20;

// console.log(a);
// // console.log(b);
// let person1 = {
//     name: "Ovi"
// };

// let person2 = person1;

// person2.name = "Rahim";

// console.log(person1.name);
// console.log(person2.name);

//clouser
// console.log(typeof undefined);
// function cash(){
//     let amount = 0;
//     return function(taka){
//         amount += taka;
//         return amount;
//     }
// }

// let tea = cash();
// console.log(tea(45));
// let coffie = cash();
// console.log(coffie(56));
// console.log(tea(50));

// for (var i = 1; i <= 3; i++) {
//     console.log(i);
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);

// }
let numbers = [1, 2, 3, 4, 5];

//to modify the actual array
// let doubled = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubled);
// numbers.forEach(function(numbers){
//     console.log(numbers, ind, arr);
    
// });
// numbers.forEach(function(numbers, index, array) {
//     console.log(numbers ,index, array);
 
// });



const x = 3 + 2 + "7";




console.log(x);

