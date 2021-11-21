const sum=(function(){
    return function sum(...args){
    return arguments.reduce((a,b)=> a+b,0);
};
})();
console.log(sum(1,2,3,4));