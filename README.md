# learnjs
*console.log("hello from javascript");// used for print a value

 *DATATYPES:
 1. undefined  
 2. null
 3. boolean
 4. string
 5. symbol
 6. number
 7. object

 *adding two numbers:
 var sum=10+10;
 console.log(sum)
 OUTPUT:20

 *incrementing a number
 var myVar=87;
 myVar++;
 OUTPUT:88

* compund assignment with augmented addition

var a=3;
a+=12
OUTPUT=15
*compund assignment with augmented subtraction
var a=11;
a-=6
OUTPUT=5
*compund assignment with augmented MULTIPLICATION
var a=1;
a-=6
OUTPUT=5
 *compund assignment with augmented division
var a=50;
a-=5
OUTPUT=10
*Decraring string variables
var firstName="allen";
var lastName="Turling";

 *Adding quotation mark inside the quotes
var myStr="i am a \"double quoted\" string inside \" double quotes\"
console.log(myStr)
OUTPUT:i am a "double quoted" string inside " double quotes"

*Concatenating strings with plus operators
 var ourStr="i come first." +"i come second.";
 var myStr="this is the start."+ "thgis is the end"
 console.log(myStr);

 *constructing variables using variable
 var myName="eldose";
var myStr="myname is" + myName + "and i am well";
console.log(myStr);
OUTPUT:myname iseldoseand i am well

*appending variable to string
var someAdjective="worthwhile";
var myStr="learning nto code is";
var appendStr = myStr += someAdjective;
console.log(appendStr)
OUTPUT:learning nto code isworthwhile

*finding length of the string
var lastNameLength=0;
var lastName="lovelace";
lastNameLength=lastName.length;
console.log(lastNameLength)
OUTPUT:8

*finding last chracter in a string
var firstLetterOfLastName="";
var lastName="Lovelace";
firstLetterOfLastName=lastName[lastName.length -1];
console.log(firstLetterOfLastName)
OUTPUT:E

*WORD BLANK
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";
    result+="the" + myAdjective + myNoun + myVerb + "to the store" + myAdverb;
    return result;
}
console.log(wordBlanks("dog","big","ran", "quickly"));
OUTPUT:the big dog ran to the store quickly

*NESTED ARRAY
var ourArray=[["the universe",42], ["everything",1010101]];

*acces array data with index
ar myArray=[50,60,70];
var myData=myArray[0];
console.log(myData)
OUTPUT: 50

*modify array data with index
var myArray=[18,64,99];
myArray[0]=45;
console.log(myArray)
OUTPUT: 45, 64, 99

*access multi dimentional array with index
var myArray =[[1,2,2],[4,5,6],[7,8,9]];
var myData=myArray[2][1];// selecting second array with data in the first index
console.log(myData)
OUTPUT:8

*Manipulating array with push function:
var myArray=[["john",23], ["cat",2]];
myArray.push(["dog",3])
outPut1=myArray.push(["dFDGDFg",30])
console.log(myArray)
OUTPUT:
['john', 23]
['cat', 2]
['dog', 3]
['dFDGDFg', 30]
length: 4

*manipulating array with pop(removing last element in the array)
var myArray =[["john",23], ["cat",2]];
var removedFromMyArray=myArray.pop();
console.log(myArray)
OUTPUT:['john', 23]

*Manipulating array with shift(removing first element in the array)
var myArray =[["john",23], ["cat",2]];
var removedFromMyArray=myArray.shift();
console.log(myArray)
OUPUT:['cat', 2]

*Manipulating array with unshift:(adding elements to the begining of the array)
var myArray =[["john",23], ["cat",2]];
myArray.shift();
myArray.unshift(["paul",35]);
console.log(myArray)
OUTPUT:['paul', 35]
       ['cat', 2]

*Reusable code with function:
function ourReusableFunction(){
    console.log("hai","world");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();
OUTPUT:hai world
       hai world
       hai world.

*passing values to functions with argumnts
function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
ourFunctionWithArgs(10,5);
output: 5

*Local scope and function:
function myLocalScope(){
    var myVar=5;
    console.log(myVar);
}
myLocalScope();
OUTPUT:5

*global vs local scope in functions:
var outerWear="tshirt";
function myOutfit(){
    var outerWear="sweater";
    return outerWear;
}console.log(myOutfit());
console.log(outerWear);
OUTPUT: SWEATER
        TSHIRT

*Return a value from function
function minusSeven(num){
    return num-7;
}
console.log(minusSeven(10));
OUTPUT:3
 
*stand in  line:
function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}
var testArr=[1,2,3,4,5];
console.log("Before: " +  JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));
OUTPUT:
Before: [1,2,3,4,5]
27_standinline.js:8 1
27_standinline.js:9 After: [2,3,4,5,6]



//function nextInLine(arr, item)
//{
 //   console.log("Lin #2: " +  JSON.stringify(arr));
 //   arr.push(item);
 //   console.log("Lin #5: " +  JSON.stringify(arr));
  //  arr1= arr.shift();
  //  console.log("Lin #7: " +  JSON.stringify(arr));
  //  arr.unshift();
  //  console.log("Lin #9: " +  JSON.stringify(arr));
  //  return arr1
//}
//var testArr=[1,2,3,4,5];
//console.log("Before: " +  JSON.stringify(testArr));
//console.log(nextInLine(testArr,6));
//console.log("After: " + JSON.stringify(testArr));
OUTPUT:
Before: [1,2,3,4,5]
 Lin #2: [1,2,3,4,5]
Lin #5: [1,2,3,4,5,6]
 Lin #7: [2,3,4,5,6]
Lin #9: [2,3,4,5,6]
27_standinline.js:14 1
27_standinline.js:15 After: [2,3,4,5,6]

*IF statement:
 function ourTrueOrFalse(x) {
    if (x) {
        return "yes, it is true";
  }
    return "no its not true";
 }


 function trueOrFalse(hi) {
 if (hi) {
    return "yes that was true";
 }
 return "no that was false";
}
 console.log(trueOrFalse(true));
output:yes that was true
 
 *Equality operator:
 function compareEquality(a,b){
    if(a===b){
        return "Equal";
    }
    return "Not equal";
}
console.log(compareEquality(10, "10"));
OUTPUT:Not equal

*Not equal operator
function testNotEqual(val){
    if(val !=99){
        return "Not equal";
    }
    return "equal";
}
console.log(testNotEqual(10,));
OUTPUT:Not equal



