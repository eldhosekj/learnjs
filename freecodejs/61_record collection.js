var collection={
    "2548":{
        "album":"slippery when wet",
        "artist":"bon jovi",
        "tracks":[
            "let it rock",
            "you give love a bad name"
        ]
    },

    "2468":{
        "album":"1999",
        "artist":"prince",
        "tracks":[
            "1999",
            "little red corvette"
        ]
},
"1245":{
    "artist":"robert palmer",
    "tracks":[]
   
},
    
        "5939",
        "album":"abba gold"
};
var collectionCopy=JSON.parse(JSON.stringify(collection));
functionupdateRecords(id, prop,value){
    if(value===""){
        delete collection[id][prop]||	[];

    }else if (prop==="tracks"){
        collection[id][prop]=collection[id][[prop]]
    collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }

    return collection;
}
console.log(updateRecords(5439,"artist","abba"));