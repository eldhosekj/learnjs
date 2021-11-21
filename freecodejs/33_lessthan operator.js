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