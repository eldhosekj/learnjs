function phoneticLookup(val){
    var result="";
var lookup={
    "alpha": "adams",
    "bravo":"boston",
    "charlie":"chicago",
    "delta":"denver",
    "echo":"easy",
    "foxtrot":"frank",
};
result=lookup[val];
returnresult;
}
console.log(phoneticLookup("charlie"));