function freezeObj(){
    "use strict";
    const MATH_CONSTRANTS={
        pi:3.14
    };
    Object.freeze(MATH_CONSTRANTS);
    try{
        MATH_CONSTRANTS.PI=99;
    }catch(ex){
        console.log(ex);
    
    }
    return MATH_CONSTRANTS.PI;
    }
    const PI=freezeObj();
}