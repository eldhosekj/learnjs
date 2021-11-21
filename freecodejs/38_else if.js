function testElseIf(val){
    if(val>10){
        result="greater tha 10";
    }else if(val<5){
        return"smaller than 5";
    }else{}
    return "between 5 and 10";
}
testElseIf(7);