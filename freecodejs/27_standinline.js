function nextInLine(arr, item)
{
    console.log("Lin #2: " +  JSON.stringify(arr));
    arr.push(item);
    console.log("Lin #5: " +  JSON.stringify(arr));
    arr1= arr.shift();
    console.log("Lin #7: " +  JSON.stringify(arr));
    arr.unshift();
    console.log("Lin #9: " +  JSON.stringify(arr));
    return arr1
}
var testArr=[1,2,3,4,5];
console.log("Before: " +  JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));