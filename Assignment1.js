// // q1
// let num = "123";
// let convert_number = 7 + Number(num);
// console.log(convert_number);
// // q2
// let x=0;
// let falsy_value=[0,false,undefined,null,NaN,""]
// if (x in falsy_value){
//     console.log("Invalid");
    
// }
// // q3

// for (let x = 1; x <= 10; x++) {
//   if (x % 2 == 0){
//     continue 
// }
// console.log(x);
// }

// // q4
// const Array = [1, 2, 3, 4, 5];
// const New_Array = Array.filter(value => value%2==0);
// console.log(New_Array);

// // q5
// const x = [1, 2, 3];
// const y = [4, 5, 6];
// const Merge = [...x, ...y];
// console.log(Merge);   

// // q6
// let x=2

// switch(x){
//     case 1:
//         console.log("Sunday");
//         break
//     case 2:
//         console.log("Monday "); 
//         break   
//     case 3:
//         console.log("Tuesday ");
//         break
//     case 4:
//         console.log("Wednesday ");    
//         break
//     case 5:
//         console.log("Thursday ");
//         break
//     case 6:
//         console.log("Friday ");        
//         break
//     case 7:
//         console.log("Saturday "); 
//         break   

// }
// // q7
// let Array=["a", "ab", "abc"]
// let Lenght_Of_Array=Array.map(item => item.length)
// console.log(Lenght_Of_Array);
// // q8
// function divide(x) {
//   if (x % 3 == 0 && x % 5 == 0) {
//     console.log("Divisible by both");
//   }
// }
// divide(15);
// // q9
// const square=(x)=> x**2
// console.log(square(5));
// // q10
// const object ={name: 'John', age: 25}
// function Name (object) {
// console.log(`${object.name} is ${object.age} years old`);
// }
// Name(object)

// // q11
// function sum (...x) {
//   let resulet = 0;
//   for (let i = 0; i < x.length; i++) {
//     resulet += x[i];
//   }
//  console.log(resulet);
// }
// sum(1, 2, 3, 4, 5);
// // q12
// function getMessage() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve("Success");
//     }, 3000);
//   });
// }

// getMessage().then(function(result) {
//   console.log(result);
// });
// // q13
// function large (num){
//     let max_number=num[0]
//     for (let i=1 ; i< num.length ;i++){
//         if (num[i]> max_number){
//             max_number=num[i]
//     }   
//     }
//     console.log(max_number);
    

// }
// let Number=[1, 3, 7, 2, 4]
// large(Number)
// // q14
// const Array =(obj)=> Object.keys(obj)
// const person ={name: "John", age: 30}
// console.log(Array(person));
// // q15
// let x="The quick brown fox"
// let data = (x)=> x.split(" ")
// console.log(data(x));
// // Essay
// // 1:
// // forEach=> method that executes a provided callback function once for each element in an array
// // for => is a loop is iterate based on a condition 
// // 2:
// // The Temporal Dead Zone (TDZ) => is the time between entering a block scope and the point where a let or const variable is declared and initialized. During this time,
// //  accessing the variable results in a ReferenceError.
// // Hoisting => is JavaScript's behavior of registering variable and function declarations in memory during the creation phase before execution starts
// // . However, only var variables are initialized with undefined, 
// // while let and const remain uninitialized inside the Temporal Dead Zone (TDZ).
// // 3:
// // The == operator is known as the loose equality operator. 
// // It compares two values for equality after performing type coercion, 
// // meaning it converts the values to the same type before comparing them.
// // The === operator is called the strict equality operator.
// //  It checks for equality without type conversion, 
// //  meaning both the value and the type must be exactly the same for the comparison to return true.
// //  4:
// //  it is crucial for handling errors that might occur at a later time than when the function was initially called. 
// //  5:
// //  conversion is the explicit, manual transformation of a value from one data type to anothe Number("123") 
// //  coercion is the implicit, automatic conversion "123" + 1 

// // bouns
// var createCounter = function (init) {
//   let currentCount = init;
//   return {
//     increment: () => ++currentCount,
//     decrement: () => --currentCount,
//     reset: () => (currentCount = init),
//   };
// };
//  const counter = createCounter(5)
// console.log( counter.increment());
// console.log( counter.reset());
// console.log(counter.decrement());








