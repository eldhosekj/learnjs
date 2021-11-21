function testLogicalOr(val){
    if(val<=10 || val>=20){
        return"outside";
    }
    return"inside";
}
testLogicalOr(15);