function orderMylogic(val){
    if(val<5){
        return "less than 5";
    }else if(val <10){
        return"less than 10";
    }else{
        return"greater than or equal to 10";
    }
}
console.log(orderMylogic(3));