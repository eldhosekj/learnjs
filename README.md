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

* Logical AND operator
function testGreaterThan(val){
    if(val>100){
        return"over 100";
    }
    if(val>10){
        return "over 10";
    }
    return"10 or under";

}
console.log(testGreaterThan(10));
OUTPUT: 10 OR UNDER

*Greater than or equal to operator
function testGreaterOrEqual(val){
    if(val){
        return("20 or over");
    }
    if (val>=10){
        return"10 or above";
    }
    return"less tha 10";

    }
console.log(testGreaterOrEqual(10));
OUTPUT:20 or over
*Less than operator
function testLessThan(val){
    if(val<25){
        return("under25");
    }
    if (val<55){
        return"under 55";
    }
    return"55 or over";

    }
console.log(testLessThan(10));
OUTPUT:under25
*LESS THAN OR EQUAL TO OPERATOR
function testLessThanOrEqual(val){
    if(val<=12){
        return("smaller than or equal to 12");
    }
    if (val<24){
        return"smaller than or equal to 24";
    }
    return"more than 24";

    }
console.log(testLessThanOrEqual(10));

 output:smaller than or equal to 12
 *AND operator:
 function testLogicalAnd(val){
    if(val<=50 && val>=25){
        return"yes";
    }
    return"no";
}
testLogicalAnd(10);
*chaining if else
function testSize(num){
    if(num<5){
        return "tiny"
    }else if(num<10){
        return"small"
    }else if(num<15){
        return"medium"
    }else if(num<20){
        return"large"
    }else{
return "huge"
    }
    }
console.log(testSize(7));
OUTPUT: SMALL

*golf code:
var names=["hole in one", "eagle","birdie", "par", "bogey","double bogey",]
function golfScore(par, strokes){
    if(strokes==1){
        return names[0]
    }else if (strokes<=par-2){
        return name[1]
    }else if (strokes<=par-1){
        return names[2]
    }else if (strokes==par){
        return names[3]
    }else if (strokes==par+1){
        return names[4]
    }else if (strokes==par+2){
        return names[5]
    }else if (strokes==par +3){
        return names[6]
    }
    }
console.log(golfScore(5,4));
OUTPUT:birdie
*switch statement:
function caseInSwitch(val){
    var answer="";
    switch(val){
    case 1:
        answer="alpha";
        break;
    case 2:
            answer="beta";
            break; 
    case 3:
        answer="gama";
        break;
     case 4:
        answer="delta";
        break; 
}
return answer;
}
console.log(caseInSwitch(1));
OUTPUT:ALPHA

* default switch:
function switchOfStuff(val){
    var answer="";
    switch(val){
        case "a":
            answer="apple";
            break;
            case "b":
                answer="bird";
                break;
                case "c":
                    answer="cat";
                    break;
                    default:
                        answer="stuff";
                        break;
    }
    return answer;
}
console.log(switchOfStuff(2));
OUTPUT: STUFF
*identical swith statement:
function seqentialSizes(val){
    var answer="";
    switch (val){
        case 1:
            case 2:
                case 3:
                    answer="low";
                    break;
                    case 4:
                        case 5:
                            case 6:
                                answer="mid";
                                break;
                                case 7:
                                    case 8:
                                        case 9:
    answer="high";
    break;
}
return answer;
}
console.log(seqentialSizes(1));
OUTPUT:LOW
*returning boolean values from functions:
function isLess(a,b){
    return a<b;
}
console.log(isLess(20, 15));
OUTPUT:FALSE

