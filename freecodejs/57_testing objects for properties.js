var myObj={
    gift:"pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp){
    if(myObj.hasOwnproperty(checkProp)){
        return myObj[checkProp];
    }else{
        return"not found"
    }
}
console.log(checkObj("gift"));