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