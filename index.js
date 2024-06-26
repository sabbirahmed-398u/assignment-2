// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum (num1, num2){
       let sum = num1 + num2 ;
       return sum;
}
// console.log(calculateSum(5,10))

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(num){
      if(num % 2 == 0 ){
        return "true"
      }else{
         return "false"
      }
}
// console.log(isEven(15))
// output is : false

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

let arrey = [15,25,45,32,87,91,54,];
const  findMax = (arrey) =>{
  return Math.max(...arrey);
}
// console.log(findMax(arrey));
// output is : 91

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str) {
  return str.split('').reverse().join('');
}
// console.log(reverseString('sabbir'));
// output is : ribbas

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterOddNumbers(arr) {
  return arr.filter((number) => number % 2 !== 0);
}
let oddNumbersArray = filterOddNumbers(numbersArray);
console.log(filterOddNumbers(oddNumbersArray));
// output is : [ 1, 3, 5, 7, 9 ]

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(arr){ 
        let sum = 0;
        for( i=0; i<arr.length; i++) {
          sum += arr[i];
        }
        return sum;
}
let numbers = [10,20]
// console.log(sumArray(numbers));
// output is : 30

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
// alochona korte hobe
function sortArray(arr){
     return arr.sort();
}
let arrrey = [50,14,65,74,1,30,5];
// console.log(sortArray(arrrey));
// alochona korte hobe

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. 
function capitalizeFirstLetter(strg){
     let capitalized_str = "";
     capitalized_str = strg[0].toUpperCase() + strg.slice(1);
     for(i=0; i < strg.length; i++){
      capitalized_str + strg[i];
     }
     return capitalized_str ;
};
let x = "hello"
// console.log(capitalizeFirstLetter(x));