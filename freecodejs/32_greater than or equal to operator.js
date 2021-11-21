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