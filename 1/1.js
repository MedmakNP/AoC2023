const fs = require('fs');
let input = fs.readFileSync('input.txt','utf-8');

console.log(input)

function sum (input){
   finalArray = []
   input.split('\n').map((items, index) => {
     const firstNumber = items.match(/\d/);
       finalArray[index] = firstNumber[0]; 
   });

   input.split('\n').map(items =>{ return items.split('').reverse().join('')}).map((items, index)=>{
     const lastNumber = items.match(/\d/);
     firstN = finalArray[index]
     finalArray[index] = firstN + lastNumber[0]
   })
   console.log(finalArray)
   return finalArray.reduce((acc, num) => acc + +num,0)
 }
console.log(sum(input))