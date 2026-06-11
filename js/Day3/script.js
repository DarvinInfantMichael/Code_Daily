// Reverse a string.
// Check whether a string is a palindrome.
// Find the largest number in an array.
// Find the smallest number in an array.
// Find the second largest number in an array.
// Remove duplicate elements from an array.
// Count the number of vowels in a string.
// Find the factorial of a number.
// Generate the Fibonacci series up to N terms.
// Check whether a number is prime.
// Find all prime numbers within a given range.
// Swap two numbers without using a third variable.
// Find the sum of all elements in an array.
// Find the maximum occurring element in an array.
// Count the frequency of each element in an array.
// Find the missing number in an array containing numbers from 1 to N.
// Merge two arrays and remove duplicates.
// Sort an array in ascending and descending order.
// Reverse an array without using the built-in reverse() method.
// Check whether two strings are anagrams.

// Reverse a String

const Rev = (str) =>{

    let res ="";

    for (let i=str.length ; i>=0 ;i--){

        res+= str[i];
    }

    return res;

}

console.log(Rev("JavaScript"));

// Check whether a string is a palindrome.

const Pal = (str) =>{

    let temp = "";

    for(let i = str.length -1; i>=0 ; i--){
        temp += str[i];
    }
        if ( temp == str){
            console.log ("It is Palindrome");
        }else{
            console.log("It is Not Palindrome");
        }
    return temp;
}

Pal("madam");

// Find the largest number in an array.

const largest = (num) =>{
    let max = num[0];

    for(let i=0;i<=num.length;i++){

        if(num[i]>max){
            max=num[i];
        }
    }
    return max;
}
console.log(largest([10,20,30,40,60,50]));

// Find the smallest number in an array.

const Small =(arr)=>{
    let min=arr[0];

    for(let i=0;i<=arr.length;i++){

        if(arr[i]<min){
            min=arr[i];
        }
    }return min;
}
console.log(Small([20,1,30,50]));

// Find the second largest number in an array.

const Secondlargest = (num1)=>{

    let max1=num1[0];
    let max2=[];

    for(let i=0;i<num1.length;i++){

        if(num1[i] > max1){
            max2=max1;
            max1=num1[i];
        }else if(max2<num1[i] && num1[i]!==max1){
            max2=num1[i];
        }
    }return max2;
}
console.log(Secondlargest([10,20,30,40]));

// Remove duplicate elements from an array.

const Duplicate =(arr1)=>{
    let res1=[];

    for(let i=0;i<arr1.length;i++){

        if(!res1.includes(arr1[i])){
            res1.push(arr1[i]);
        }
    }return res1;
}
console.log(Duplicate([10,20,30,10,20,40]));
    
// Count the number of vowels in a string.

const Vowels =(str)=>{

    let count=0;

    for(let i=0;i<str.length;i++){

        if("aeiouAEIOU".includes(str[i])){
            count++;
        }
    }return count;
}
console.log(Vowels("JavaScript"));

// Find the factorial of a number.

const Factorial =(num)=>{
    let fact =1;

    for(let i=1 ; i<=num ; i++){
        fact*=i;
    }
    return fact;
}
console.log(Factorial(5));

// Generate the Fibonacci series up to N terms.

const Fiboo =(n)=>{
    let a =0;
    let b =1;

    for(let i=0;i<=n;i++){
        console.log(a);

        let nxt=a+b;
        a=b;
        b=nxt;
    }
}
Fiboo((7));

// Check whether a number is prime.

const  prime =(n)=>{

    let res =

}