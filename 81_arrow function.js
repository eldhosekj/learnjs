const realNumberArray=[4,5.6,-9.8,3.14,42,6,8.4,-2];
const squareList=(arr)=>{
    const squaredInteger = arr.filter(num=> Number.isInteger(num)&& num>0).map(x=> x *x);
};
const squaredInteger=squareList(realNumberArray);
console.log(squaredInteger)